import React from 'react'
import MainSection from "../molecules/MainSection/MainSection";
import Heading from '../atoms/Heading/Heading'
import Paragraph from '../atoms/Paragraph/Paragraph';



const Delivrence = ({ fluid,description }) => (
    <MainSection fluid={fluid}>
<Heading>{description.sectionTwoTitle}</Heading>
<Paragraph>{description.sectionTwoParagraph}</Paragraph>

    </MainSection>

)

export default Delivrence