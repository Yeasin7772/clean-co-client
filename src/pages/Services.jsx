import { useState } from 'react';
import Container from '../components/Layout/ui/Container'
import Headers from '../components/Layout/ui/Header'
import { useQuery, } from '@tanstack/react-query'
import useAxios from '../hooks/useAxios';
import ServicesCard from '../components/ServicesCard';
const Services = () => {
    // const [services, setServices] = useState([])
    const axios = useAxios()
    //   const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    const getServices = async () => {
        const result = await axios.get('/services')
        return result;
    }
    const { data: services,
        isLoading,
        isError,
        error
     } = useQuery({
            queryKey: ['service'],
            queryFn: getServices
        })
    console.log(services);
    if (isLoading) {
        return <p>loading</p>
    }
    if (isError) {
        return <p>something wrong : {error}</p>
    }

    return (
        <div>
            <Container className='mt-10'>
                <Headers title='services'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore voluptas commodi
                    perferendis fugit asperiores voluptates iusto, consectetur error quibusdam?

                </Headers>
            </Container>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        services?.data?.map(service => <ServicesCard key={service._id}
                             service={service} >
                                
                             </ServicesCard>)

                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;