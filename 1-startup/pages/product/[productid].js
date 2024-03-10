import { useRouter } from "next/router";


const ProductDetails = () => {

const router = useRouter();

console.log(router.pathname);
console.log(router.query);

    return (
        <div>
            this is the details page of product {router.query.productid}
        </div>
    );
};

export default ProductDetails;