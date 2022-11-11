import Directory from "./directory/directory.component";

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 2,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },


    // {
    //   id: 3,
    //   title: "prints",
    //   imageUrl: 'assets/images/img1.jpg'

    // },
    // {
    //   id: 4,
    //   title: "shirts",
    //   imageUrl: 'assets/images/img2.jpg'
      
    // },
    // {
    //   id: 5,
    //   title: "tote bags",
    //   imageUrl: 'assets/images/img3.jpg'
      
    // }
    {
      id: 3,
      title: "print 1",
      imageUrl: 'assets/prints/print1.jpg'

    },
    {
      id: 4,
      title: "print 2",
      imageUrl: 'assets/prints/print2.jpg'
      
    },
    {
      id: 5,
      title: "print 3",
      imageUrl: 'assets/prints/print3.jpg'
      
    },
    {
      id: 6,
      title: "print 4",
      imageUrl: 'assets/prints/print4.jpg'

    },
    {
      id: 7,
      title: "print 5",
      imageUrl: 'assets/prints/print5.jpg'
      
    },
    {
      id: 8,
      title: "print 6",
      imageUrl: 'assets/prints/print6.jpg'
      
    },
    {
      id: 9,
      title: "print 7",
      imageUrl: 'assets/prints/print7.jpg'

    },
  ];
  
  return (
    <Directory categories={categories} />
  );
};

export default App;
