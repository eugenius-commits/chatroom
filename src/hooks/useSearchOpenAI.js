import axios from 'axios';

const useSearchOpenAI = async (searchTerm, searchHistory) => {
  try {
    const documents = searchHistory ? searchHistory.join('\n') : '';
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/search",
      {
        documents,
        query: searchTerm,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
  
    return response.data.answer;
  } catch (error) {
    console.error(error);
    return 'No answer has been delivered';
    //throw new Error("Sorry, there was an error with the OpenAI API.");
  }
};

export default useSearchOpenAI;
