import React from 'react';
import styled from 'styled-components';
import { Variables } from '../../styles/Variables';

const Svg = styled.svg`
    polyline {
        stroke-width: 8;
        stroke: ${Variables.primaryColor};
    }
`;

export default function Hamburger(props) {
    return (
        // <Svg
        //     xmlns='http://www.w3.org/2000/svg'
        //     viewBox='0 0 32 32'
        //     width='100%'
        //     height='100%'
        // >
        //     <path
        //         stroke={`${Variables.white}`}
        //         d='M16 4.783c-3.777 0-7.554.403-11.66 1.207a1 1 0 0 0-.781.752 5.46 5.46 0 0 0 0 2.516 1 1 0 0 0 .78.752c8.214 1.609 15.108 1.609 23.321 0a1 1 0 0 0 .78-.752 5.46 5.46 0 0 0 0-2.516 1 1 0 0 0-.78-.752C23.554 5.186 19.777 4.783 16 4.783zm0 1.994c3.39 0 6.805.375 10.494 1.057.006.111.006.22 0 .332-7.377 1.364-13.61 1.364-20.988 0a3.41 3.41 0 0 1 0-.332C9.194 7.152 12.61 6.777 16 6.777zm0 6.006c-3.777 0-7.554.403-11.66 1.207a1 1 0 0 0-.781.752 5.46 5.46 0 0 0 0 2.516 1 1 0 0 0 .78.752c8.214 1.609 15.108 1.609 23.321 0a1 1 0 0 0 .78-.752 5.46 5.46 0 0 0 0-2.516 1 1 0 0 0-.78-.752c-4.106-.804-7.883-1.207-11.66-1.207zm0 1.994c3.39 0 6.805.375 10.494 1.057.006.111.006.22 0 .332-7.377 1.364-13.61 1.364-20.988 0a3.411 3.411 0 0 1 0-.332c3.688-.682 7.104-1.057 10.494-1.057zm0 6.006c-3.777 0-7.554.403-11.66 1.207a1 1 0 0 0-.781.752 5.46 5.46 0 0 0 0 2.516 1 1 0 0 0 .78.752c8.214 1.609 15.108 1.609 23.321 0a1 1 0 0 0 .78-.752 5.46 5.46 0 0 0 0-2.516 1 1 0 0 0-.78-.752c-4.106-.804-7.883-1.207-11.66-1.207zm0 1.994c3.39 0 6.805.375 10.494 1.057.006.111.006.22 0 .332-7.377 1.364-13.61 1.364-20.988 0a3.411 3.411 0 0 1 0-.332c3.688-.682 7.104-1.057 10.494-1.057z'
        //     />
        // </Svg>

        <Svg
            fill={`${Variables.white}`}
            stroke={`${Variables.white}`}
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='100%'
            height='100%'
            viewBox='0 0 512 512'
            enableBackground='new 0 0 512 512'
            xmlSpace='preserve'
            {...props}
        >
            <path d='M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z' />
            <g>
                <rect
                    x={151.5}
                    y={184.5}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    width={192}
                    height={32}
                />
                <rect
                    x={151.5}
                    y={248.5}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    width={192}
                    height={32}
                />
                <rect
                    x={151.5}
                    y={312.5}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    width={192}
                    height={32}
                />
            </g>
        </Svg>
    );
}
