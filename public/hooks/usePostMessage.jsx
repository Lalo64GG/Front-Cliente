export const usePostMessage = async () => {
      try {
        const response = await fetch('http://localhost:4000/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const responseData = await response.json();
        console.log('Response Data:', responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
