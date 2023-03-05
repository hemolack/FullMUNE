import axios from 'axios';

const model = 'gpt-3.5-turbo';

const AIService = {
    getCompletion: async (message, callback = null, json = true) => {
        let params = {
            messages: [{"role": "user", "content": message + (json ? ' in JSON format' : '')}],
            model: model,
            n: 1
        }
        let headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        console.info(headers);
        const response = await axios.post('https://api.openai.com/v1/chat/completions', params, { headers: headers }).then((response) => {
            if(callback) {
                callback(response.data);
            }
            // console.info(response.data.choices[0].message);
        })
        .catch((error) => {
            alert('error')
            console.error(error.response);
        })
    }
}

export default AIService;