import { useEffect, useRef, useState } from 'react';

import type { ApiResponse, ContactFormErrors, ContactFormValues, FormField, UtmParams, FormPayload } from '../types/form';

export const MINIMUM_CONTACT_AGE = 48;

const initialValues: ContactFormValues = {
    name: '',
    age: '',
    phone: '',
    state: '',
    email: '',
};

const DEFAULT_UTM_PARAMS: UtmParams = {
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
};

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
    const errors: ContactFormErrors = {};
    const normalizedPhone = values.phone.replace(/\D/g, '');
    const parsedAge = Number(values.age);

    if (!values.name.trim()) errors.name = 'Ingresa tu nombre completo.';

    if (!values.age) errors.age = 'Ingresa tu edad.';
    else if (!Number.isInteger(parsedAge) || parsedAge < MINIMUM_CONTACT_AGE) errors.age = `Debes tener al menos ${MINIMUM_CONTACT_AGE} años.`;

    if (!normalizedPhone) errors.phone = 'Ingresa tu número de teléfono.';
    else if (normalizedPhone.length !== 12 || !normalizedPhone.startsWith('52')) errors.phone = 'Ingresa un número de México válido de 10 dígitos.';

    if (!values.state) errors.state = 'Selecciona tu estado.';

    if (!values.email.trim()) errors.email = 'Ingresa tu correo electrónico.';
    else if (!emailPattern.test(values.email.trim())) errors.email = 'Ingresa un correo electrónico válido.';

    return errors;
}

export function useContactForm() {
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [loading, setLoading] = useState(false);
    const [hasSubmitError, setHasSubmitError] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [utmParams, setUtmParams] = useState<UtmParams>(DEFAULT_UTM_PARAMS);
    const submissionInProgress = useRef(false);

    useEffect(() => {
        const DAYS_TO_EXPIRE = 15;
        const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24;
        const now = Date.now();

        const urlParams = new URLSearchParams(window.location.search);

        const utmSource = urlParams.get('utm_source') ?? '';
        const utmMedium = urlParams.get('utm_medium') ?? '';
        const utmCampaign = urlParams.get('utm_campaign') ?? '';

        const storedData = localStorage.getItem('utmParams');

        if (utmSource || utmMedium || utmCampaign) {
            const newParams: UtmParams = {
                utmSource,
                utmMedium,
                utmCampaign,
                timestamp: now,
            };

            localStorage.setItem('utmParams', JSON.stringify(newParams));
            setUtmParams(newParams);

            return;
        }

        if (!storedData) return;

        try {
            const parsedData = JSON.parse(storedData) as UtmParams;

            if (typeof parsedData.timestamp !== 'number') {
                localStorage.removeItem('utmParams');
                return;
            }

            const ageInDays = (now - parsedData.timestamp) / MS_IN_ONE_DAY;

            if (ageInDays <= DAYS_TO_EXPIRE) {
                setUtmParams(parsedData);
            } else {
                localStorage.removeItem('utmParams');
            }
        } catch {
            localStorage.removeItem('utmParams');
        }
    }, []);

    const updateField = (name: FormField, value: string): void => {
        setSubmitSuccess(false);
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => {
            if (!current[name]) return current;
            const nextErrors = { ...current };
            delete nextErrors[name];
            return nextErrors;
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        updateField(event.target.name as FormField, event.target.value);
    };

    const resetForm = (): void => {
        setValues(initialValues);
        setErrors({});
        setHasSubmitError(false);
        setSubmitError(null);
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if (submissionInProgress.current) return;

        setSubmitSuccess(false);
        setSubmitError(null);
        const validationErrors = validate(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setHasSubmitError(true);
            return;
        }

        submissionInProgress.current = true;
        setLoading(true);
        setHasSubmitError(false);

        try {
            const formDataToSend: FormPayload = {
                name: values.name.trim(),
                phone: values.phone,
                email: values.email.trim(),
                state: values.state,
                age: values.age,
                utmSource: utmParams.utmSource,
                utmMedium: utmParams.utmMedium,
                utmCampaign: utmParams.utmCampaign,
            };

            //'http://localhost:5000/submit' '/backend/submit.php'
            const response = await fetch('/backend/submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });

            let data: ApiResponse = {};

            try {
                data = (await response.json()) as ApiResponse;
            } catch {
                // Una respuesta sin JSON sigue siendo válida si el estado HTTP es exitoso.
            }

            if (!response.ok) {
                setSubmitError(data.message ?? data.error ?? 'No fue posible enviar el formulario. Inténtalo nuevamente.');
                return;
            }

            window.dataLayer = window.dataLayer ?? [];
            window.dataLayer.push({
                event: 'formulario_enviado',
            });

            resetForm();
            setSubmitSuccess(true);
        } catch (error: unknown) {
            console.error('Error al enviar el formulario:', error);
            setSubmitError('No fue posible enviar el formulario. Inténtalo nuevamente.');
        } finally {
            submissionInProgress.current = false;
            setLoading(false);
        }
    };

    return { values, errors, loading, hasSubmitError, submitError, submitSuccess, updateField, handleInputChange, handleSubmit, resetForm };
}
