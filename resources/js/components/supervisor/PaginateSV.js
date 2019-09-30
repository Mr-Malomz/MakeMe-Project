import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.section `
    width: 100%;

    nav {
        margin: 30px 0 30px 0;
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

                &:first-child {
                    border-radius: 4px 0 0 4px;
                    font-weight: bold;
                }

                &:last-child {
                    border-radius: 0 4px 4px 0;
                    font-weight: bold;
                }

                a {
                    text-decoration: none;
                    color: #000000;
                }
            }
    }

    .active {
        background: #C4C4C4;
        color: #ffffff
    }

`;

const Pagination = () => {
    return (
        <PaginationWrapper>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">Previous</a></li>
                    <li className="active"><a href="http://127.0.0.1:8000/#/Supervisor">1</a></li>
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">2</a></li>
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">3</a></li>
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">4</a></li>
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">5</a></li>
                    <li ><a href="http://127.0.0.1:8000/#/Supervisor">Next</a></li>
                </ul>
            </nav>
        </PaginationWrapper>
    )
}

export default Pagination
