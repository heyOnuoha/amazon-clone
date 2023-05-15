import star_regular from '@/assets/star-regular.svg';
import star_solid from '@/assets/star-solid.svg';
import Image from 'next/image'

const Rating = ({ value }) => {
    return value && (
        <div className='rating'>
            <Image src={value >= 1 ? star_solid : star_regular} width="20" height="20" alt="Star" />
            <Image src={value >= 2 ? star_solid : star_regular} width="20" height="20" alt="Star" />
            <Image src={value >= 3 ? star_solid : star_regular} width="20" height="20" alt="Star" />
            <Image src={value >= 4 ? star_solid : star_regular} width="20" height="20" alt="Star" />
            <Image src={value >= 5 ? star_solid : star_regular} width="20" height="20" alt="Star" />
        </div>
    );
}

export default Rating;