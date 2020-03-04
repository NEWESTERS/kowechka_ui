import React, {FunctionComponent, useEffect, useState} from 'react';
import './TabFilter.css';

interface ITabFilter {
    title: string,
    value: string
}

interface OwnProps {
    selectedDefault?: string,
    title?: string,
    filters: ITabFilter[]
    filterCallback?: (value: string) => any
}

type Props = OwnProps;

const TabFilter: FunctionComponent<Props> = (props) => {

    const { filters, filterCallback, title, selectedDefault } = props;
    const [selected, setSelected] = useState(selectedDefault || '');

    useEffect(() => {
        setSelected(selectedDefault || '')
    }, [selectedDefault]);

    const handleClick = (value: string) => () => {
        if (value !== selected) {
            setSelected(value);
            filterCallback && filterCallback(value);
        }
    };

    return (
        <div className={'tab-filter'}>
            <div className={'tab-filter-title'}>{title}</div>
            {filters && filters.map((item: ITabFilter, i) =>
                <div onClick={handleClick(item.value)} key={i}
                     className={`tab-item ${item.value === selected || (item.value === 'ALL' && selected == '') ? 'selected' : ''}`}>{item.title}</div>)}
        </div>
    );
};

export default TabFilter;
