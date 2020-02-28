import React from 'react'
import MainSection from "../molecules/MainSection/MainSection";
import Heading from '../atoms/Heading/Heading'
import Paragraph from '../atoms/Paragraph/Paragraph';


const Repair = ({ fluid,description }) => (
    <MainSection fluid={fluid}>
<Heading>{description.sectionThreeTitle}</Heading>
<Paragraph>{description.sectionThreeParagraph}</Paragraph>

    </MainSection>

)

export default Repair