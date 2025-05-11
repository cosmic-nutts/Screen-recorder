import Header from "@/components/Header";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  
  return (
    <div className="text-2xl font-karla">
      <Header
        subHeader="adrianjsmastery.pro"
        title="Adrian | JS Mastery"
        userImg="/assets/images/dummy.jpg"
      />
      USER ID: {id}
    </div>
  );
}

export default Page;
