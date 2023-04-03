import React, {useMemo, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./MySelect";

const SearchAndFilter = ({users, render}) => {

    const [selectFilter, setSelectFilter] = useState(``);
    const [inputSearch ,setInputSearch] = useState(``);

    const sortedUsers = useMemo(() => {
        if(selectFilter) {
            return [...users].sort((a, b) => a[selectFilter].localeCompare(b[selectFilter]))
        } else {
            return users
        }
    }, [selectFilter, users])

    const searchAndSortedUsers = useMemo(() => {
        if(inputSearch && selectFilter) {
            const copy = [...sortedUsers].filter(user => {
                if(user[selectFilter].toLowerCase().indexOf(inputSearch) > -1) {
                    return true
                }
            })
            return copy
        } else {
            return sortedUsers
        }
    }, [inputSearch, sortedUsers])

    const changeFilter = (filter) => {
        setSelectFilter(filter)
    }

    render(searchAndSortedUsers)

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <MyInput
                placeholder={`Поиск`}
                value={inputSearch}
                onChange={e => setInputSearch(e.target.value)}
                type={`text`}
            />
            <MySelect
                value={selectFilter}
                onChange={changeFilter}
                defaultvalue={`Выебрете сортировку`}
                options={[
                    {value: `numQuest`, name: `По названию задачи`},
                    {value: `title`, name: `По описанию задачи`}
                ]}
            />
        </div>
    );
};

export default SearchAndFilter;