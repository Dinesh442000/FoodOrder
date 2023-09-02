const Contact = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4 text-3xl">Contact US Page</h1>
      <form action="">
        <input
          type="text"
          className="border border-black p-2 m-4"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-4"
          placeholder="Message"
        />
        <button className=" border border-black p-2 m-4 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
