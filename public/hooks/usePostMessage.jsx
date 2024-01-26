const PostExample = () => {
    const [postData, setPostData] = useState({
      senderId: 1,
      receiverId: 2,
      sender_name: 'Eduardo',
      content: 'Hola',
    });
  
    const handlePostRequest = async () => {
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
}