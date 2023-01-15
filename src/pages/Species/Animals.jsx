import InfoList from "../../components/InfoList"
import { getAnimalsOfSpecie } from "../../requests/animals"
import Loading from '../../components/Loading'
import './Animals.scss'
import { useParams } from "react-router-dom"
export default function Animals()
{
    const { specie } = useParams();
    const [animals, loading, error, title] = getAnimalsOfSpecie(specie);
    return(
        <div id="animal-list" style={{
            [loading ? 'height' : 'min-height']: '100vh'
        }}>
            {
                loading ? 
                <Loading/>
                :
                <InfoList
                    id="animal"
                    data={animals}
                    title={`The ${title} you'll find around`}
                />
            }
        </div>
    )
}