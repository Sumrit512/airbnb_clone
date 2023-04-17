'use client';

import Container from "../Container";
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'This property is close to the beach'
    },
    {
        label: 'windmills',
        icon: GiWindmill,
        description: 'This property has Windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside', 
    },
    {
     label: 'Pools',
     icon: TbPool,
     description: 'This property has a pool',
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake'
    },
    {
      label: 'Skiing',
      icon: FaSkiing,
      description: 'This property has skiing activities',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a Castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has snow activities' 
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        descripiton: 'This property has Cave related activities'
    }

]

const Categories = () => {

const params = useSearchParams()
const category = params?.get('category')
const pathname = usePathname()

const isMainPage = pathname ==='/';

if(!isMainPage){
    return null;
}

    return (
        <Container >
            <div 
            className="
            pt-4
            flex
            flex-row
            items-center

            jusify-between
            overflow-x-auto
            "
            > 
               {categories.map((item) => 
                 (
              <CategoryBox 
              key={item.label}
              label={item.label}
              selected={category === item.label}
             icon={item.icon}
              />
                )
               )}
            </div>
        </Container>

    )

} 

export default Categories;