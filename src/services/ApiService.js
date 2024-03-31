// ApiService.js

// Dummy data representing news feeds
const newsFeeds = [
    {
      id: 1,
      title: "Breaking News: Lorem Ipsum Dolor Sit Amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Breaking",
      imageUrl: "https://via.placeholder.com/150",
      videoUrl: "",
      creationDate: "2024-03-31",
      status: "published"
    },
    {
      id: 2,
      title: "Technology News: Nulla Euismod Neque Eu",
      content: "Nulla euismod neque eu felis dignissim...",
      category: "Technology",
      imageUrl: "",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      creationDate: "2024-03-30",
      status: "draft"
    },
    {
        id: 3,
        title: "Business Update: Fusce Feugiat Tellus Nec",
        content: "Fusce feugiat tellus nec felis tincidunt...",
        category: "Business",
        imageUrl: "https://via.placeholder.com/150",
        videoUrl: "",
        creationDate: "2024-03-29",
        status: "published"
      },
      {
        id: 4,
        title: "Sports News: Morbi Tristique Elit Vel",
        content: "Morbi tristique elit vel libero vestibulum...",
        category: "Sports",
        imageUrl: "",
        videoUrl: "",
        creationDate: "2024-03-28",
        status: "draft"
      },
      {
        id: 5,
        title: "Entertainment Update: Nunc Sed Lacinia Neque",
        content: "Nunc sed lacinia neque, id blandit nisi...",
        category: "Entertainment",
        imageUrl: "https://via.placeholder.com/150",
        videoUrl: "",
        creationDate: "2024-03-27",
        status: "published"
      },
      {
        id: 6,
        title: "Health News: Proin Lobortis Lectus Eget",
        content: "Proin lobortis lectus eget purus pharetra...",
        category: "Health",
        imageUrl: "",
        videoUrl: "",
        creationDate: "2024-03-26",
        status: "draft"
      },
      {
        id: 7,
        title: "Science Update: Vestibulum Ante Ipsum Primis",
        content: "Vestibulum ante ipsum primis in faucibus...",
        category: "Science",
        imageUrl: "https://via.placeholder.com/150",
        videoUrl: "",
        creationDate: "2024-03-25",
        status: "published"
      },
      {
        id: 8,
        title: "Travel News: Integer Dapibus Semper",
        content: "Integer dapibus semper turpis, id viverra...",
        category: "Travel",
        imageUrl: "",
        videoUrl: "",
        creationDate: "2024-03-24",
        status: "draft"
      },
      {
        id: 9,
        title: "World News: Sed Ullamcorper Elit At",
        content: "Sed ullamcorper elit at ligula finibus...",
        category: "World",
        imageUrl: "https://via.placeholder.com/150",
        videoUrl: "",
        creationDate: "2024-03-23",
        status: "published"
      },
      {
        id: 10,
        title: "Education Update: Mauris Nec Semper",
        content: "Mauris nec semper est, id posuere nunc...",
        category: "Education",
        imageUrl: "",
        videoUrl: "",
        creationDate: "2024-03-22",
        status: "draft"
      }
    // Add more dummy news feeds as needed
  ];
  
  // Dummy data representing performance metrics
  const performanceData = {
    views: [100, 200, 300, 400, 500, 600, 700],
    likes: [50, 60, 70, 80, 90, 100, 110],
    comments: [20, 30, 40, 50, 60, 70, 80]
  };
  
  // Simulate fetching news feeds from API
  export const fetchNewsFeeds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newsFeeds);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  // Simulate fetching performance metrics from API
  export const fetchPerformanceData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(performanceData);
      }, 1000); // Simulate 1 second delay
    });
  };
  