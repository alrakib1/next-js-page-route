import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div className="text-4xl text-center font-bold">
      this is the details page of {router.query.clientprojectid} for client{" "}
      {router.query.id}
    </div>
  );
};

export default SelectedClientProjectPage;
