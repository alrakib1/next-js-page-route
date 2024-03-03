import { useRouter } from 'next/router';
import React from 'react';

const ClientDetails = () => {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
           <h2 className='text-4xl text-center font-semibold'> this is the details page of client {router.query.id}</h2>
           <ul>
                <li>
                        <a href={`/clients/${router.query.id}/ProjectA`}>Project A</a>
                </li>
                <li>
                     <a href={`/clients/${router.query.id}/ProjectB`}>Project B</a>
                </li>
           </ul>
        </div>
    );
};

export default ClientDetails;