const loadData = async () => {
    try {
        const url1 = "https://api.noroff.dev/api/v1/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8"
        const url2 = "https://api.noroff.dev/api/v1/rainy-days/6e5ae9e6-2033-4c63-82b9-5b58226425f4"
        const url3 = "https://api.noroff.dev/api/v1/rainy-days/97e77845-a485-4301-827f-51b673d4230f"
        const result = await Promise. all([
            fetch (url1),
            fetch (url2),
            fetch (url3)
        ])
        const dataPromises = await result.map(result => result.json());
        const finalData = Promise.all(dataPromises);
        return finalData; 
    } catch (err) {
        console.log (err);
    }
}

const data = loadData().then(data => console.log(data));
