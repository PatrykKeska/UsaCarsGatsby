import React from 'react'
import MainSection from "../molecules/MainSection/MainSection";
import Heading from '../atoms/Heading/Heading'
import Paragraph from '../atoms/Paragraph/Paragraph';


const LookingFor = ({ fluid,description }) => (
    <MainSection fluid={fluid}>
<Heading>{description.sectionOneTitle}</Heading>
<Paragraph>{description.sectionOneParagraph}</Paragraph>

    </MainSection>

)

export default LookingFor