async function sendDataToGoogleSheets(formData) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxseR9Dt2ZGDKpzT5rgV-ozWzJPIRtbU78TNADBZVWQ6cmioxREtVh3Hpfo3cnDDDDp/exec';
    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData,
        });
        return response.ok;
    } catch (error) {
        console.error('Error!', error.message);
        return false;
    }
}