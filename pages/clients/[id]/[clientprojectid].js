import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>this is the details page of a project for a specific client</div>;
};

export default SelectedClientProjectPage;
