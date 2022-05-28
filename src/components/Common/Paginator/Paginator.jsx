import { useState } from 'react';
import './Paginator.scss';
import leftArrow from '../../../assets/images/left-arrow.svg';
import rightArrow from '../../../assets/images/right-arrow.svg';

const Paginator = ({
    onCurrentPageUpdate,
    currentPageNumber,
    maxUsersCount,
    maxPageSize }) => {

    let totalPagesCount = Math.ceil(maxUsersCount / maxPageSize);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    const [currentPageGroup, setCurrentPageGroup] = useState(1);
    let pageGroupCount = Math.ceil(totalPagesCount / 10);
    let leftPageGroupBorder = (currentPageGroup - 1) * 10 + 1;
    let rightPageGroupBorder = (currentPageGroup * 10)

    return (
        <div className='pageSelectors'>
            {currentPageGroup > 1
                ? <button className='pageSelectors__nav' onClick={() => setCurrentPageGroup(currentPageGroup - 1)}>
                    <img src={leftArrow} width='28' alt="left-arrow" srcset="" />
                </button>
                : null}

            {pages.filter(number => number >= leftPageGroupBorder && number <= rightPageGroupBorder)
                .map((number, index) => {
                    return <input type="button"
                        key={index}
                        onClick={() => onCurrentPageUpdate(number)}
                        className={currentPageNumber === number
                            ? 'pageSelector pageSelector__active'
                            : 'pageSelector pageSelector__normal button'}
                        value={number} />
                })}
            {pageGroupCount > currentPageGroup
                ? <button className='pageSelectors__nav' type='button' onClick={() => setCurrentPageGroup(currentPageGroup + 1)}>
                    <img src={rightArrow} width='28' alt="right-arrow" />
                </button>
                : null}
        </div>
    )
}

export default Paginator