import React from 'react';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

const PaginationWrapper = styled.section `
    width: 85%;

    nav {
        margin: 30px auto 30px auto;
        width: 100%;
    }
    
    .pagination {
        display: flex;
        font-size: 12px;
        flex-flow: row nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        
            li {
                list-style: none;
                padding: 5px 10px 5px 10px;
                border: 0.5px solid #C4C4C4;
                cursor: pointer;
            }
    }

    .active {
        background: #C4C4C4;
        color: #ffffff
    }

`;

const Pagination = ({itemPerPage, totalItem, paginate, currentPage}) => {
    const pageNumber = [];

    //get the number of pages for an item
    for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <PaginationWrapper>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {totalItem >= 11 && pageNumber.map(number => (
                        <li key={number} className={currentPage === number ? 'active' : ''} onClick={() => paginate(number)}>{number}</li>
                    ))}
                </ul>
            </nav>
        </PaginationWrapper>
    )
}

export default Pagination
