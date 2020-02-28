import React from 'react'
import MainSection from "../molecules/MainSection/MainSection";
import Heading from '../atoms/Heading/Heading'
import Paragraph from '../atoms/Paragraph/Paragraph';


const Experince = ({ fluid,description, mobile, background }) => (
    <MainSection mobile={mobile} background={background} fluid={fluid}>
<Heading>{description.sectionFourTitle}</Heading>
<Paragraph>{description.sectionFourParagraph}</Paragraph>
    </MainSection>

)

export default Experince