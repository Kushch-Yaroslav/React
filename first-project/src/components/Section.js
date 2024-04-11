function Section(props) {
  const userObj = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    images: "https://i.dummyjson.com/data/products/1/1.jpg",
  };
  const clicker = () => {
    console.log(`It's click`);
  };

  return (
    <section onClick={clicker}>
      <img src={userObj.images} />
      <h2>{userObj.title}</h2>
      <p>{userObj.description}</p>
      <p>Price: {userObj.price} $</p>
      <button>BUY!</button>
    </section>
  );
}

export default Section;
