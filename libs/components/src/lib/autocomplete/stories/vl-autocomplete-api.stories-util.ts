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
