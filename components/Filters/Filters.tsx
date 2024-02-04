'use client';

import Categories from './Categories';
import React from 'react';
import Search from './Search';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Filters = () => {
  const [isSearchToggled, setIsSearchToggled] = React.useState(false);
  return (
    <section>
      <div className='flex flex-col justify-between md:flex-row md:items-center py-14'>
        <Categories />
        <div
          className={cn(
            'flex items-center gap-2 px-3 mt-4 md:m-0',
            'text-ecm-gray text-lg cursor-pointer transition-all hover:text-ecm-yellow'
          )}
          onClick={() => setIsSearchToggled(!isSearchToggled)}
        >
          <span>search</span>
          <SearchIcon size={16} />
        </div>
      </div>
      {<Search isSearchToggled={isSearchToggled} setIsSearchToggled={setIsSearchToggled} />}
    </section>
  );
};

export default Filters;
