import { MediaQueries } from '../styles/Utilities';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.desktop}px;
    background-color: ${(props) => props.color};
    overflow: visible;

    @media ${MediaQueries.tablet} {
        height: ${(props) => props.tablet}px;
    }

    @media ${MediaQueries.mobile} {
        height: ${(props) => props.mobile}px;
    }
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${(props) =>
        props.shadowToggle
            ? 'box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.3);'
            : null}
`;

export default function Spacer({ ...props }) {
    // TODO: dynamically grab sibling color and apply to self
    return (
        <Container
            color={props.color}
            desktop={props.desktop}
            tablet={props.tablet}
            mobile={props.mobile}
        >
            <Shadow shadowToggle={props.shadowToggle} />
        </Container>
    );
}
