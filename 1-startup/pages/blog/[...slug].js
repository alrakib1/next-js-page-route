import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = () => {
    const router = useRouter();
    console.log(router.query);
    console.log(router.pathname);
    return (
        <div>
            this is the blog details page
        </div>
    );
};

export default BlogDetails;