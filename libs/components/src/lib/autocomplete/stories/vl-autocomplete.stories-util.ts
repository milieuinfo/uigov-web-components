export async function mockedApiCall(searchTerm: any, maxSuggestions: any) {
    const results = [
        'Drabbinkdreef, Gent',
        'Drabstraat, Gent',
        'Drabstraat, Kontich',
        'Drabstraat, Mechelen',
        'Drabstraat, Mortsel',
        'Drabstraat, Wichelen',
        'Drabstraat, Zwevezele',
    ];
    const filteredResults = results
        .filter((i) => i.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .slice(0, maxSuggestions);
    return {
        SuggestionResult: filteredResults,
    };
}

export async function fetchDataFromMockedApiCall(autocomplete: any, searchTerm: any) {
    const responseBody = await mockedApiCall(searchTerm, autocomplete.maxSuggestions);
    autocomplete.matches = responseBody.SuggestionResult.map((obj) => ({
        title: obj,
        value: obj,
    }));
}

export async function fetchDataFromApiCall(autocomplete: any, searchTerm: any) {
    const result = await fetch(
        `https://loc.geopunt.be/geolocation/suggestion?q=${searchTerm}&c=${autocomplete.maxSuggestions}`
    );
    const responseBody = await result.json();
    autocomplete.matches = responseBody.SuggestionResult.map((obj: string) => ({
        title: obj,
        value: obj,
    }));
}
