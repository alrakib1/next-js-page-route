import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  return (
    <>
      <div className="text-center max-w-lg mx-auto mt-10">
        <h1 className="text-4xl">{loadedProduct.title}</h1>
        <p className="text-xl">{loadedProduct.description}</p>
      </div>
    </>
  );
};

export default ProductDetailPage;

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context; // { pid: 'p1' }
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {

const data = await getData();

const ids = data.products.map((product) => product.id);

const pathWithParams = ids.map(id=>({params:{pid:id}}))


  return {
    paths: pathWithParams,
    fallback: false,
  };
}

