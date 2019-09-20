import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchResultsWrapper = styled.section `
    width: 100%;
    min-height: 300px;
    height: auto;
    background: #F4F9FF;
    padding: 20px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h6 {
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        text-transform: capitalize;

        thead {
            th {
                text-align: left;
                padding-left: 10px;
                height: 35px;
                opacity: 0.6;
                font-weight: bold;
            }
        }

        tbody {
            tr {
                height: 35px;
                
                &:nth-of-type(odd) {
                    background: #ffffff;
                }

                &:nth-of-type(even) {
                    background: #D9E1E8;
                }
            }
        }

        td {
            padding-left: 10px;
            
            a {
                text-decoration: none;
                text-transform: uppercase;
                border: 1px solid;
                padding: 5px 15px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 12px;
            }

            .create {
                color: #1F78B4;

                :hover {
                    color: #ffffff;
                    border: none;
                    background: #1F78B4
                }
            }

            .view {
                color: #55ACEE;

                :hover {
                    color: #ffffff;
                    border: none;
                    background: #55ACEE
                }
            }

            .edit {
                color: #30C618;

                :hover {
                    color: #ffffff;
                    border: none;
                    background: #737672
                }
            }
        }
    }

    @media (max-width: 1000px) {
        table {
            font-size: 12px;
            a {
                font-size: 10px !important;
            }
        }
    }

    @media (max-width: 900px) {
        table {
            font-size: 10px;
            a {
                font-size: 8px !important;
                padding: 5px 10px !important;
            }
        }
    }
`;

const SearchResults = () => {
    return (
        <SearchResultsWrapper>
            <h6>search result</h6>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>customer's name</th>
                        <th>action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>mrs obinna chikwuma</td>
                        <td><Link className="create">create job</Link></td>
                        <td><Link className="view">view</Link></td>
                        <td><Link className="edit">edit</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>miss adejoke ibilola</td>
                        <td><Link className="create">create job</Link></td>
                        <td><Link className="view">view</Link></td>
                        <td><Link className="edit">edit</Link></td>
                    </tr>
                </tbody>
            </table>
        </SearchResultsWrapper>
    )
}

export default SearchResults
