import React, { useEffect } from 'react';
import './QnA_page.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { useRef } from "react";
import { Link } from 'react-router-dom';
//import Left_part from './Left_part';
//import Right_part from './Right_part';
//import axios from "axios";
// import openaiResources from 'openai/resources';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons';
// import { faPlus, faPenToSquare, faFileLines } from '@fortawesome/free-solid-svg-icons';
function QnA_page() {

    const [count, setCount] = useState(["Blueprint 1"]);
    const [print, setPrint] = useState(1);

    const [idea, setIdea] = useState("");
    const [startup, setStartup] = useState(false);
    const [brand, setBrand] = useState(false);
    const [digital, setDigital] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [branding, setBranding] = useState(false);
    const [influencer, setInfluencer] = useState(false);
    const [public_relations, setPublic_relation] = useState(false);
    const [content, setContent] = useState(false);
    const [social, setSocial] = useState(false);
    const [performance, setPerformance] = useState(false);
    const [youtube, setYoutube] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [website, setWebsite] = useState(false);
    const [app, setApp] = useState(false);
    const [youtubeads, setYoutubeads] = useState(false);
    const [instagramads, setInstagramads] = useState(false);
    const [google, setGoogle] = useState(false);
    const [product, setProduct] = useState(false);
    const [service, setService] = useState(false);
    const [company, setCompany] = useState(false);
    const [personal, setPersonal] = useState(false);
    const [digitalprod, setDigitalprod] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [press, setPress] = useState(false);
    const [tv, setTV] = useState(false);
    const [video, setvideo] = useState(false);
    const [photo, setPhoto] = useState(false);


    const [buttonidea, setButtonidea] = useState("");
    const [buttonstartup, setButtonstartup] = useState("");
    const [buttonbrand, setButtonbrand] = useState("");
    const [buttondigital, setButtonDigital] = useState("");
    const [buttontechnology, setButtonTechnology] = useState("");
    const [buttonbranding, setButtonBranding] = useState("");
    const [buttonpublic, setButtonPublic] = useState("");
    const [buttoninfluencer, setButtonInfluencer] = useState("");
    const [buttoncontent, setButtonContent] = useState("");
    const [buttonsocial, setButtonSocial] = useState("");
    const [buttonperformance, setButtonPerformance] = useState("");
    const [buttonyoutube, setButtonYoutube] = useState("");
    const [buttonfacebook, setButtonFacebook] = useState("");
    const [buttoninstagram, setButtonInstagram] = useState("");
    const [buttonwebsite, setButtonWebsite] = useState("");
    const [buttonapp, setButtonApp] = useState("");
    const [buttonyoutubeads, setButtonYoutubeads] = useState("");
    const [buttongoogle, setButtonGoogle] = useState("");
    const [buttoninstagramads, setButtonInstagramads] = useState("");
    const [buttonproduct, setButtonProduct] = useState("");
    const [buttonservice, setButtonService] = useState("");
    const [buttoncompany, setButtonCompany] = useState("");
    const [buttonpersonal, setButtonPersonal] = useState("");
    const [buttondigitalprod, setButtonDigitalprod] = useState("");
    const [buttonphysical, setButtonPhysical] = useState("");
    const [buttonpress, setButtonPress] = useState("");
    const [buttontv, setButtonTV] = useState("");
    const [buttonvideo, setButtonvideo] = useState("");
    const [buttonphoto, setButtonPhoto] = useState("");

    // const[generatepdf, setgeneratepdf]=useState("");
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    const messages = { questions, answers }

    const handleDownloadPdf = async () => {
        try {
            // Send a request to your backend to generate and download the PDF
            const response = await fetch('http://localhost:5500/api/v1/generatepdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token':localStorage.getItem('token'),
                    
                },
                body: JSON.stringify({messages}),
            });
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to generate or download PDF');
            }
            // Convert the response body to a blob
            const blob = await response.blob();
            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([blob]));
            // Create an anchor element to facilitate the download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.pdf';
            // Append the anchor element to the document body
            document.body.appendChild(a);
            // Trigger a click event on the anchor element to initiate the download
            a.click();
            // Remove the anchor element from the document body after the download is complete
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error generating or downloading PDF:', error);
        }
    };

    const addQuestions = (newQuestion) => {
        setQuestions(questions => [...questions, newQuestion])
        // questions.push(newQuestion)
    }

    const addAnswers = (newAnswer) => {
        setAnswers(answers => [...answers, newAnswer])
        // answers.push(newAnswer)
    }

    const ideaHandler = () => {
        addQuestions("What is the stage of your business ?")
        addAnswers("Idea / Vision")
        setIdea(true);
        setStartup(false);
        setBrand(false);
        setButtonidea("1px solid #0060d0");
        setButtonstartup(false);
        setButtonbrand(false);
    };

    const startupHandler = () => {
        addQuestions('What is the stage of your business ?')
        addAnswers('Startup / Growth')
        setIdea(false);
        setStartup(true);
        setBrand(false);
        setButtonstartup("1px solid #0060d0");
        setButtonbrand(false);
        setButtonidea(false);

    };

    const brandHandler = () => {
        addQuestions('What is the stage of your business ?')
        addAnswers('Brand / Enterprise')
        setIdea(false);
        setStartup(false);
        setBrand(true);
        setButtonbrand("1px solid #0060d0");
        setButtonstartup(false);
        setButtonidea(false);
    };

    const digitalHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Digital Marketing')
        setDigital(true);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);
        setButtonDigital("1px solid #0060d0");
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const technologyHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Technology & Innovation')
        setDigital(false);
        setTechnology(true);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology("1px solid #0060d0");
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const brandingHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Branding & Design')
        setDigital(false);
        setTechnology(false);
        setBranding(true);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding("1px solid #0060d0");
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const influencerHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Influencer Marketing')
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(true);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer("1px solid #0060d0");
        setButtonContent(false);
    };

    const public_relationsHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Public Realations')
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(true);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic("1px solid #0060d0");
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const contentHandler = () => {
        addQuestions('What are you looking for (choose ONLY one)?')
        addAnswers('Content Production')
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(true);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent("1px solid #0060d0");
    };

    const socialHandler = () => {
        addQuestions('Anything specific in the digital marketing ?')
        addAnswers('Social Media Marketing')
        setSocial(true);
        setPerformance(false);
        setButtonSocial("#0060d0");
        setButtonPerformance(false);

    };

    const performanceHandler = () => {
        addQuestions('Anything specific in the digital marketing ?')
        addAnswers('Performance marketing')
        setSocial(false);
        setPerformance(true);
        setButtonSocial(false);
        setButtonPerformance("#0060d0");

    };

    const youtubeHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Youtube')
        setFacebook(false);
        setInstagram(false);
        setYoutube(true);
        setButtonYoutube("#0060d0");
        setButtonFacebook(false);
        setButtonInstagram(false);
    };

    const facebookHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Facebook')
        setFacebook(true);
        setInstagram(false);
        setYoutube(false);
        setButtonFacebook("#0060d0");
        setButtonYoutube(false);
        setButtonInstagram(false);
    };

    const instagramHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Instagram')
        setFacebook(false);
        setYoutube(false);
        setInstagram(true);
        setButtonInstagram("#0060d0");
        setButtonFacebook(false);
        setButtonYoutube(false);
    };

    const youtubeadsHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Youtube Ads')
        setGoogle(false);
        setInstagramads(false);
        setYoutubeads(true);
        setButtonYoutubeads("#0060d0");
        setButtonGoogle(false);
        setButtonInstagramads(false);
    };

    const googleHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Google Ads')
        setGoogle(true);
        setInstagramads(false);
        setYoutubeads(false);
        setButtonGoogle("#0060d0");
        setButtonYoutubeads(false);
        setButtonInstagramads(false);
    };

    const instagramadsHandler = () => {
        addQuestions('Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)')
        addAnswers('Instagram Ads')
        setGoogle(false);
        setYoutubeads(false);
        setInstagramads(true);
        setButtonInstagramads("#0060d0");
        setButtonGoogle(false);
        setButtonYoutubeads(false);
    };

    const appHandler = () => {
        addQuestions('Anything specific in the technology and innovation?')
        addAnswers('App Development')
        setWebsite(false);
        setApp(true);
        setButtonApp("#0060d0");
        setButtonWebsite(false);
    };

    const websiteHandler = () => {
        addQuestions('Anything specific in the technology and innovation?')
        addAnswers('Website Development')
        setApp(false);
        setWebsite(true);
        setButtonWebsite("#0060d0");
        setButtonApp(false);
    };

    const productHandler = () => {
        addQuestions('Anything specific in the branding and Designing?')
        addAnswers('Product Branding')
        setProduct(true);
        setService(false);
        setCompany(false);
        setPersonal(false)
        setButtonProduct("#0060d0");
        setButtonService(false);
        setButtonCompany(false);
        setButtonPersonal(false);
    };

    const serviceHandler = () => {
        addQuestions('Anything specific in the branding and Designing?')
        addAnswers('Service Branding')
        setProduct(false);
        setService(true);
        setCompany(false);
        setPersonal(false)
        setButtonService("#0060d0");
        setButtonProduct(false);
        setButtonCompany(false);
        setButtonPersonal(false);
    };

    const companyHandler = () => {
        addQuestions('Anything specific in the branding and Designing?')
        addAnswers('Company Branding')
        setProduct(false);
        setService(false);
        setCompany(true);
        setPersonal(false)
        setButtonCompany("#0060d0");
        setButtonProduct(false);
        setButtonService(false);
        setButtonPersonal(false);
    };

    const personalHandler = () => {
        addQuestions('Anything specific in the branding and Designing?')
        addAnswers('Personal Branding')
        setProduct(false);
        setService(false);
        setCompany(false);
        setPersonal(true)
        setButtonPersonal("#0060d0");
        setButtonProduct(false);
        setButtonCompany(false);
        setButtonService(false);
    };

    const digitalprodHandler = () => {
        addQuestions('Anything specific in the product branding?')
        addAnswers('Digital Product')
        setDigitalprod(true);
        setPhysical(false);
        setButtonDigitalprod("#0060d0");
        setButtonPhysical(false);
    };

    const physicalHandler = () => {
        addQuestions('Anything specific in the product branding?')
        addAnswers('Physical Product')
        setDigitalprod(false);
        setPhysical(true);
        setButtonPhysical("#0060d0");
        setButtonDigitalprod(false);
    };

    const pressHandler = () => {
        addQuestions('Anything specific in the public relations?')
        addAnswers('Press Release')
        setPress(true);
        setTV(false);
        setButtonPress("#0060d0");
        setButtonTV(false);
    };

    const tvHandler = () => {
        addQuestions('Anything specific in the public relations?')
        addAnswers('TV & Radio')
        setPress(false);
        setTV(true);
        setButtonTV("#0060d0");
        setButtonPress(false);
    };

    const videoHandler = () => {
        addQuestions('Anything specific in the content production?')
        addAnswers('Video Shoot')
        setvideo(true);
        setPhoto(false);
        setButtonvideo("#0060d0");
        setButtonPhoto(false);
    };

    const photoHandler = () => {
        addQuestions('Anything specific in the content production?')
        addAnswers('Photo shoot')
        setvideo(false);
        setPhoto(true);
        setButtonPhoto("#0060d0");
        setButtonvideo(false);
    };

    // blueprint Increment button
    const [clownCounter, setClownCounter] = React.useState(1);
    // console.log(clownCounter);

    // Input field 
    //const inputRef = useRef(null);
    const inputFunction = () => {
        // if (inputRef.current) {
        //     inputRef.current.readOnly = false;
        //     //inputRef.current.focus();
        //   }
    };

    // For Question and Answer
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);

    const youtube_ques = [
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube q1
                    ' What are your overall goals for Youtube marketing? (For example, increasing brand awareness, build a community, generating leads)',
                    1000,
                    () => { addQuestions(' What are your overall goals for Youtube marketing? (For example, increasing brand awareness, build a community, generating leads)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
         <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube q2
                    'What type of content will resonate best with your target audience on YouTube? (For example, tutorials, product reviews, Vlogs)',
                    1000,
                    () => { addQuestions('What type of content will resonate best with your target audience on YouTube? (For example, tutorials, product reviews, Vlogs)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube q3
                    'What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)',
                    1000,
                    () => { addQuestions('What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube q4
                    'Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?',
                    1000,
                    () => { addQuestions('Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube q5
                    'How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)',
                    1000,
                    () => { addQuestions('How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // youtube 6
                    'What is your total budget?',
                    1000,
                    () => { addQuestions('What is your total budget?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];

    const influencer_ques = [
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer start
                    'What are your goals for influencer marketing?(For example, increasing brand awareness, driving product sales, expanding reach)',
                    1000,
                    () => { addQuestions('What are your goals for influencer marketing?(For example, increasing brand awareness, driving product sales, expanding reach)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer q1
                    'What type of content and messaging will resonate with your audience (For example, product reviews, sponsored content, giveaways)',
                    1000,
                    () => { addQuestions('What type of content and messaging will resonate with your audience (For example, product reviews, sponsored content, giveaways)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer q2
                    'What do you want your viewers to FEEL after looking at your influencer posts (For Eg. Fomo, Desire etc) ?',
                    1000,
                    () => { addQuestions('What do you want your viewers to FEEL after looking at your influencer posts (For Eg. Fomo, Desire etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer q3
                    'What do you want your viewers to DOccc (For eg. Buy Now, Visit store, Like etc)?',
                    1000,
                    () => { addQuestions('What do you want your viewers to DOccc (For eg. Buy Now, Visit store, Like etc)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer q4
                    'What is the total timeline for executing the campaign (For Eg. 2 Weeks, 3 months etc)',
                    1000,
                    () => { addQuestions('What is the total timeline for executing the campaign (For Eg. 2 Weeks, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // Influencer q5
                    'What is the total budget (Please be realistic here) ?',
                    1000,
                    () => { addQuestions('What is the total budget (Please be realistic here) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>

    ];

    const facebook_ques = [
    <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // facebook start
                    'What are your overall goals for FB marketing? (For example, increasing brand awareness, driving engagement, generating leads)',
                    1000,
                    () => { addQuestions('What are your overall goals for FB marketing? (For example, increasing brand awareness, driving engagement, generating leads)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // facebook q1
                    'What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)',
                    1000,
                    () => { addQuestions('What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // facebook q2
                    'Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?',
                    1000,
                    () => { addQuestions('Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // facebook q3
                    'How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)',
                    1000,
                    () => { addQuestions('How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // facebook q4
                    'What is your total budget?',
                    1000,
                    () => { addQuestions('What is your total budget?)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];

    const instagram_ques = [
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram start
                    'What are your overall goals for Instagram marketing? (For example, increasing brand awareness, driving engagement, generating leads)',
                    1000,
                    () => { addQuestions('What are your overall goals for Instagram marketing? (For example, increasing brand awareness, driving engagement, generating leads)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram q1
                    'What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)',
                    1000,
                    () => { addQuestions('What do you want your audience to do you once they come across your page (For Eg. Buy, Subscribe etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram q2
                    'Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?',
                    1000,
                    () => { addQuestions('Where does your audience lie geographically (For Eg. Is there a particular city/state/country youre targeting)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram q3
                    'How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)',
                    1000,
                    () => { addQuestions('How long do you want your Social Strategy Calendar to be (For Eg. 2 Weeks, 1 Month, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram q4
                    'What is your total budget?',
                    1000,
                    () => { addQuestions('What is your total budget?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];
    const youtubeads_ques = [
     <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // instagram start
                    'What are the specific goals (KPIs) for your Youtube Ads campaigns (For Eg. Increase website traffic or generate leads)?',
                    1000,
                    () => { addQuestions('What are the specific goals (KPIs) for your Youtube Ads campaigns (For Eg. Increase website traffic or generate leads)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,


    ];
    const googleques = [
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    'What are the specific goals for your Google Ads campaigns (For Eg. Increase website traffic or generate leads)?',
                    1000,
                    () => { addQuestions('What are the specific goals for your Google Ads campaigns (For Eg. Increase website traffic or generate leads)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];
    const instagramads_ques = [
    <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    'What are your specific goals for Instagram ads? (For eg. increasing brand awareness, driving website traffic, boosting conversions)',
                    1000,
                    () => { addQuestions('What are your specific goals for Instagram ads? (For eg. increasing brand awareness, driving website traffic, boosting conversions)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];
    const website_ques = [
       <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // website start
                    'What is the name of the website (For Eg. disco.com) ?',
                    1000,
                    () => { addQuestions('What is the name of the website (For Eg. disco.com) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // website q1
                    'What will be the key features or functions of the website?',
                    1000,
                    () => { addQuestions('What will be the key features or functions of the website?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // website q2
                    'What do you want your users to do on the site (For Eg. Order Food, Buy Clothes etc) ?',
                    1000,
                    () => { addQuestions('What do you want your users to do on the site (For Eg. Order Food, Buy Clothes etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // website q3
                    'What will be your business model for the website (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?',
                    1000,
                    () => { addQuestions('What will be your business model for the website (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // websiteq4
                    'What is the budget & timeline (For eg. $15000 & 4 weeks) ?',
                    1000,
                    () => { addQuestions('What is the budget & timeline (For eg. $15000 & 4 weeks) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];

    const app_ques = [
<div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // app start
                    'What is the name of the app (For Eg. Dunzo, Zomato etc)',
                    1000,
                    () => { addQuestions('What is the name of the app (For Eg. Dunzo, Zomato etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // app q1
                    'What will be the key features or functions of the app?',
                    1000,
                    () => { addQuestions('What will be the key features or functions of the app?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // app q2
                    'What do you want your users to do on the app (For Eg. Order Food, Buy Clothes etc) ?',
                    1000,
                    () => { addQuestions('What do you want your users to do on the app (For Eg. Order Food, Buy Clothes etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // app q3
                    'What will be your business model for the app (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?',
                    1000,
                    () => { addQuestions('What will be your business model for the app (For Eg. Single Purchases, Subscriptions, Bulk Orders etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // app q4
                    'What is the budget & timeline (For eg. $15000 & 4 weeks) ?',
                    1000,
                    () => { addQuestions('What is the budget & timeline (For eg. $15000 & 4 weeks) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];
    const digitalprod_ques = [
<div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // digital product start
                    'What is the core purpose and value proposition of your tech product?',
                    1000,
                    () => { addQuestions('What is the core purpose and value proposition of your tech product?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // digital product q1
                    'How do you want your tech product brand to be perceived in the market?',
                    1000,
                    () => { addQuestions('How do you want your tech product brand to be perceived in the market?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // digital product q2
                    'What key brand attributes and messaging will resonate with your target audience? (For Eg. Speed, security etc)',
                    1000,
                    () => { addQuestions('What key brand attributes and messaging will resonate with your target audience? (For Eg. Speed, security etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // digital product q4
                    'What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)',
                    1000,
                    () => { addQuestions('What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // digital product q4
                    'What is the total budget for executing the branding exercise?',
                    1000,
                    () => { addQuestions('What is the total budget for executing the branding exercise?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];
    const physical_ques = [
<div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // physical product start
                    'What is the unique selling point or key feature of your physical product?',
                    1000,
                    () => { addQuestions('What is the unique selling point or key feature of your physical product?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // physical product q1
                    'How do you want your physical product brand to be perceived in the market?',
                    1000,
                    () => { addQuestions('How do you want your physical product brand to be perceived in the market?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // physical product q2
                    'What key brand attributes and messaging will resonate with your target audience? (For Eg. Speed, security etc)',
                    1000,
                    () => { addQuestions('What key brand attributes and messaging will resonate with your target audience? (For Eg. Speed, security etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // physical product q3
                    'What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)',
                    1000,
                    () => { addQuestions('What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // physical product q4
                    'What is the total budget for executing the branding exercise?',
                    1000,
                    () => { addQuestions('What is the total budget for executing the branding exercise?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
    ];
    const service_ques = [
   <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // service  start
                    'What are the core values and personality traits that you want your brand to embody?',
                    1000,
                    () => { addQuestions('What are the core values and personality traits that you want your brand to embody?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // service q2
                    'What is the desired perception and emotional connection you want to establish with your target audience?',
                    1000,
                    () => { addQuestions('What is the desired perception and emotional connection you want to establish with your target audience?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // service q3
                    'What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)',
                    1000,
                    () => { addQuestions('What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];

    const company_ques = [
   <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // company start
                    'What is the unique value proposition or core message of your company?',
                    1000,
                    () => { addQuestions('What is the unique value proposition or core message of your company?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // company q1
                    'What are the key personality traits and qualities you want your brand to convey?',
                    1000,
                    () => { addQuestions('What are the key personality traits and qualities you want your brand to convey?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // company q2
                    'What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)',
                    1000,
                    () => { addQuestions('What is your total timeline for executing the branding exercise (For Eg. 2 weeks, 1 Month etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];
    const personal_ques = [
    <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // personal start
                    'What is the desired perception or emotional response you want to evoke in your target audience?',
                    1000,
                    () => { addQuestions('What is the desired perception or emotional response you want to evoke in your target audience?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // personal q1
                    'What channels and platforms will you use to showcase your personal brand and engage with your target audience?',
                    1000,
                    () => { addQuestions('What channels and platforms will you use to showcase your personal brand and engage with your target audience?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // personal q2
                    'What is your budget for the entire branding exercise?',
                    1000,
                    () => { addQuestions('What is your budget for the entire branding exercise?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // personal q3
                    'What is the total timeline for performing this exercise?',
                    1000,
                    () => { addQuestions('What is the total timeline for performing this exercise?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];
    const press_ques = [
   <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // personal start
                    'What is the core purpose and value proposition of your tech product?',
                    1000,
                    () => { addQuestions('What is the core purpose and value proposition of your tech product?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q1
                    'What are the specific goals and objectives of your marketing campaign? (For example, to increase brand awareness, and generate leads etc)',
                    1000,
                    () => { addQuestions('What are the specific goals and objectives of your marketing campaign? (For example, to increase brand awareness, and generate leads etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q2
                    'What is the desired reputation or perception you want to build through PR efforts?',
                    1000,
                    () => { addQuestions('What is the desired reputation or perception you want to build through PR efforts?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q3
                    'What key messages and stories do you want to convey to the public and media?',
                    1000,
                    () => { addQuestions('What key messages and stories do you want to convey to the public and media?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q4
                    'What type of media channels do you wish to focus on most for reaching your target audience (For Eg. Fashion Magazines, Finance Articles etc)',
                    1000,
                    () => { addQuestions('What type of media channels do you wish to focus on most for reaching your target audience (For Eg. Fashion Magazines, Finance Articles etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q5
                    'What do you want your viewers to DO (For eg. Buy Now, Visit store, Like etc)?',
                    1000,
                    () => { addQuestions('What do you want your viewers to DO (For eg. Buy Now, Visit store, Like etc)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q6
                    'What is the total timeline for executing the campaign (For Eg. 2 Weeks, 3 months etc)',
                    1000,
                    () => { addQuestions('What is the total timeline for executing the campaign (For Eg. 2 Weeks, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // press q7
                    'What is the total budget (Please be realistic here) ?',
                    1000,
                    () => { addQuestions('What is the total budget (Please be realistic here) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];

    const tv_ques = [
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv start
                    'What specific product/service/event etc do you wish to do PR for (For Eg. Product Launch, Event Release etc)',
                    1000,
                    () => { addQuestions('What specific product/service/event etc do you wish to do PR for (For Eg. Product Launch, Event Release etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q1
                    'What specific goals and objectives do you want to achieve? (For example, increase brand visibility and credibility, drive website traffic)',
                    1000,
                    () => { addQuestions('What specific goals and objectives do you want to achieve? (For example, increase brand visibility and credibility, drive website traffic)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q2
                    'Which TV and radio channels or stations are most relevant ? (For example, national broadcast networks, popular local radio stations)',
                    1000,
                    () => { addQuestions('Which TV and radio channels or stations are most relevant ? (For example, national broadcast networks, popular local radio stations)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q3
                    'What key messages and stories do you want to convey? (For example, highlighting the features and benefits of your product, sharing customer testimonials etc)',
                    1000,
                    () => { addQuestions('What key messages and stories do you want to convey? (For example, highlighting the features and benefits of your product, sharing customer testimonials etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q4
                    'What do you want your viewers to DO (For eg. Buy Now, Search Name, Like etc)?',
                    1000,
                    () => { addQuestions('What do you want your viewers to DO (For eg. Buy Now, Search Name, Like etc)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q5
                    'What key messages and stories do you want to convey? (For example, highlighting the features and benefits of your product, sharing customer testimonials etc)',
                    1000,
                    () => { addQuestions('What key messages and stories do you want to convey? (For example, highlighting the features and benefits of your product, sharing customer testimonials etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // tv q6
                    'What is the total budget (Please be realistic here) ?',
                    1000,
                    () => { addQuestions('What is the total budget (Please be realistic here) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,


    ];
    const photo_ques = [
      <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // photo start
                    'Which type of images do you wish to get shot (For Eg. Model, Food Photography, Product Usage etc)',
                    1000,
                    () => { addQuestions('Which type of images do you wish to get shot (For Eg. Model, Food Photography, Product Usage etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // photo q1
                    'What key message do you want to convey through the photo (For Eg. Zara - New fashion line launch) ?',
                    1000,
                    () => { addQuestions('What key message do you want to convey through the photo (For Eg. Zara - New fashion line launch) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // photo q2
                    'What do you want your viewers to feel after looking at the images (For Eg. Fomo, Desire etc) ?',
                    1000,
                    () => { addQuestions('What do you want your viewers to feel after looking at the images (For Eg. Fomo, Desire etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // photo q3
                    'What do you want your viewers to do after looking at the image (For eg. Buy Now, Visit store, Like etc)?',
                    1000,
                    () => { addQuestions('What do you want your viewers to do after looking at the image (For eg. Buy Now, Visit store, Like etc)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // photo q5
                    'What is the total budget (Please be realistic here) ?',
                    1000,
                    () => { addQuestions('What is the total budget (Please be realistic here) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];
    const video_ques = [
    <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video start
                    'Which type of video do you wish to shoot (For Eg. Music Video, Ad Film, Social Media Content etc)',
                    1000,
                    () => { addQuestions('Which type of video do you wish to shoot (For Eg. Music Video, Ad Film, Social Media Content etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video q1
                    'What key messages or story do you want to convey through the video?',
                    1000,
                    () => { addQuestions('What key messages or story do you want to convey through the video?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video q2
                    'What do you want your viewers to feel after watching the video (For Eg. Fomo, Empathy etc) ?',
                    1000,
                    () => { addQuestions('What do you want your viewers to feel after watching the video (For Eg. Fomo, Empathy etc) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video q3
                    'What do you want your viewers to do after watching the video (For eg. Buy Now, Visit store, Like etc)?',
                    1000,
                    () => { addQuestions('What do you want your viewers to do after watching the video (For eg. Buy Now, Visit store, Like etc)?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video q4
                    'What is the total timeline for executing the video (For Eg. 2 Weeks, 3 months etc)',
                    1000,
                    () => { addQuestions('What is the total timeline for executing the video (For Eg. 2 Weeks, 3 months etc)') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,
        <div className='row'>
        <div className='bussiness' >
            <div className='logo'>
                <img src='./images/logo.png' alt=''></img>
            </div>
            <span> <TypeAnimation
                sequence={[
                    // video q5
                    'What is the total budget (Please be realistic here) ?',
                    1000,
                    () => { addQuestions('What is the total budget (Please be realistic here) ?') }
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
            /></span>
        </div></div>,

    ];

    const handleResponseSubmit = (response) => {
        setUserResponses([...userResponses, response]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        addAnswers(response)
    };
    return (
        <div className='container'>
            {/* <Left_part data={{clownCounter}}/> */}
            <div className='row mt-2'>
                <div className='col-lg-9 col-md-8 col-12'>
                    <div className="blue">
                        <section className='logo1'>
                            <img src='./images/logo.png' alt=''></img>
                            <p>TenMarket</p>
                        </section>
                        {/* <h3>Blueprint {clownCounter}</h3> */}
                        {/* <div className='pro-algin'>
                            <span className='qna-free'>Free</span>
                            <span className='qna-pro'>Pro</span>
                            <span className='qna-pro'>Premium</span>
                        </div> */}
                    </div>
                    <div className='mydivider mt-5'></div>
                    <div className='bussiness' style={{ padding: "32px 10px" }}>
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span><TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What is the stage of your business ?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={ideaHandler}>
                        <div className='qna-border' style={{ border: buttonidea }}>
                            <img src='./images/stage_idea.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Idea / Vision</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={startupHandler}>
                        <div className='qna-border' style={{ border: buttonstartup }}>
                            <img src='./images/stage_startup.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Startup / Growth</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandHandler}>
                        <div className='qna-border' style={{ border: buttonbrand }}>
                            <img src='./images/stage_brand.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Brand / Enterprise</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Idea / Vision */}
            {idea && (
                <div className='row  mt-2'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What are you looking for (choose ONLY one)?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                            <div className='qna-border' style={{ border: buttondigital }} >
                                <img src='./images/digital.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Digital Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                            <div className='qna-border' style={{ border: buttontechnology }}>
                                <img src='./images/technology.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Technology & Innovation</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                            <div className='qna-border' style={{ border: buttonbranding }}>
                                <img src='./images/branding.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Branding & Design</p>
                            </div>

                        </div>
                    </div>
                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                            <div className='qna-border' style={{ border: buttonpublic }}>
                                <img src='./images/public_relations.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Public Realations</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                            <div className='qna-border' style={{ border: buttoninfluencer }}>
                                <img src='./images/influencer_marketing.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Influencer Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                            <div className='qna-border' style={{ border: buttoncontent }}>
                                <img src='./images/content.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Content Production</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Startup / Growth */}
            {startup && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What are you looking for (choose ONLY one)?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                            <div className='qna-border' style={{ border: buttondigital }}>
                                <img src='./images/digital.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Digital Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                            <div className='qna-border' style={{ border: buttontechnology }}>
                                <img src='./images/technology.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Technology & Innovation</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                            <div className='qna-border' style={{ border: buttonbranding }}>
                                <img src='./images/branding.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Branding & Design</p>
                            </div>

                        </div>
                    </div>
                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                            <div className='qna-border' style={{ border: buttonpublic }}>
                                <img src='./images/public_relations.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Public Realations</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                            <div className='qna-border' style={{ border: buttoninfluencer }} onClick={inputFunction}>
                                <img src='./images/influencer_marketing.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Influencer Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                            <div className='qna-border' style={{ border: buttoncontent }}>
                                <img src='./images/content.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Content Production</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* Brand / Enterprise */}
            {brand && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What are you looking for (choose ONLY one)?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                            <div className='qna-border' style={{ border: buttondigital }}>
                                <img src='./images/digital.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Digital Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                            <div className='qna-border' style={{ border: buttontechnology }}>
                                <img src='./images/technology.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Technology & Innovation</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                            <div className='qna-border' style={{ border: buttonbranding }}>
                                <img src='./images/branding.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text mt-4'>Branding & Design</p>
                            </div>
                        </div>
                    </div>
                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                            <div className='qna-border' style={{ border: buttonpublic }}>
                                <img src='./images/public_relations.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Public Realations</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                            <div className='qna-border' style={{ border: buttoninfluencer }}>
                                <img src='./images/influencer_marketing.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Influencer Marketing</p>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                            <div className='qna-border' style={{ border: buttoncontent }}>
                                <img src='./images/content.png' alt=''></img>
                                <div className='mydivider mt-4'></div>
                                <p className='qna-text'>Content Production</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Digital Marketing */}
            {digital && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the digital marketing?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' onClick={socialHandler}>
                            <div className='digital-text' style={{ backgroundColor: buttonsocial }}>
                                <p>Social Media Marketing</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' onClick={performanceHandler}>
                            <div className='digital-text' style={{ backgroundColor: buttonperformance }}>
                                <p>Performance marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Technology and innovation */}
            {technology && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the technology and innovation?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={websiteHandler} style={{ backgroundColor: buttonwebsite }}>
                                <p onClick={inputFunction}>Website Development</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={appHandler} style={{ backgroundColor: buttonapp }}>
                                <p onClick={inputFunction}>App development</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Branding & Design */}
            {branding && (
                <>
                <div className='row'>
                    <div className='bussiness'>
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the branding and Designing?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }} /></span>
                    </div></div>
                    <div className='row'>
                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={productHandler} style={{ backgroundColor: buttonproduct }}>
                                <p>Product Branding</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={serviceHandler} style={{ backgroundColor: buttonservice }}>
                                <p onClick={inputFunction}>Service Branding</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={companyHandler} style={{ backgroundColor: buttoncompany }}>
                                <p onClick={inputFunction}>Company branding</p>
                            </div>
                        </div>
                    </div></div>
                    <div className='row'>
                    <div className=' qna-box mt-0'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={personalHandler} style={{ backgroundColor: buttonpersonal }}>
                                <p onClick={inputFunction}>Personal branding</p>
                            </div>
                        </div>
                    </div>
                    </div></>
                
            )}

            {/* influencer */}
            {influencer && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < influencer_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{influencer_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p>
                                        <strong>Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < influencer_ques.length - 1 && (
                                       
                                       <p>
                                            <strong></strong> {influencer_ques[index + 1]}
                                        </p>
                                        
                                    )}
                                </div>
                            ))}
                            <div className='row'>
                            <input type="text" className='input-field p-2' placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} /></div>
                        </div>
                    ) : (
                        <div className='res'>
                            <p>Questionnaire complete! Thank you for your responses.</p>
                            <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                        </div>
                    )}
                </div>
                </div>
            )}

            {/* public relation */}
            {public_relations && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the public relations?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={pressHandler} style={{ backgroundColor: buttonpress }}>
                                <p onClick={inputFunction} >Press Release</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={tvHandler} style={{ backgroundColor: buttontv }}>
                                <p onClick={inputFunction}>TV & Radio</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            {content && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the content production?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={videoHandler} style={{ backgroundColor: buttonvideo }}>
                                <p onClick={inputFunction}>Video shoot</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={photoHandler} style={{ backgroundColor: buttonphoto }}>
                                <p onClick={inputFunction}>Photo shoot</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Social Media Marketing  */}
            {social && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12' >
                            <div className='digital-text' onClick={youtubeHandler} style={{ backgroundColor: buttonyoutube }}>
                                <p>Youtube</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={facebookHandler} style={{ backgroundColor: buttonfacebook }}>
                                <p onClick={inputFunction}>Facebook</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={instagramHandler} style={{ backgroundColor: buttoninstagram }}>
                                <p onClick={inputFunction}>Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Performance marketing  */}
            {performance && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={youtubeadsHandler} style={{ backgroundColor: buttonyoutubeads }}>
                                <p onClick={inputFunction}>Youtube Ads</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={googleHandler} style={{ backgroundColor: buttongoogle }}>
                                <p onClick={inputFunction}>Google Ads</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={instagramadsHandler} style={{ backgroundColor: buttoninstagramads }}>
                                <p onClick={inputFunction}>Instagram Ads</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Youtube */}
            {youtube && (
                <div className='row'>
                    <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                        {currentQuestionIndex < youtube_ques.length ? (
                            <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                                <p>{youtube_ques[currentQuestionIndex]}</p>
                                {userResponses.map((response, index) => (
                                    <div key={index}>
                                        <div className='res'>
                                        <p style={{justifyContent:'center'}}>
                                            <strong >Response:</strong> {response}
                                        </p></div>
                                        {/* {index === currentQuestionIndex - 1 &&  */}
                                        {index < youtube_ques.length - 1 && (
                                            <p>
                                                <strong></strong> {youtube_ques[index + 1]}
                                            </p>
                                        )}
                                    </div>

                                ))}
                                <div className='row'>
                                <input
                                    type="text" className='input-field  p-2'
                                    placeholder='Enter the text here'
                                    onKeyPress={(event) => {
                                        if (event.key === "Enter") {
                                            handleResponseSubmit(event.target.value);
                                            event.target.value = ""; // Clear input field
                                        }
                                    }} />
                                    </div>
                            </div>
                        ) : (
                            <div className='res'>
                            <p>Questionnaire complete! Thank you for your responses.</p>
                            <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                        </div>
                        )}
                    </div>
                </div>
            )
            }

            {/* facebook */}
            {facebook && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < facebook_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{facebook_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < facebook_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {facebook_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>
            )}

            {/* instagram */}
            {instagram && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < instagram_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{instagram_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < instagram_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {instagram_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>
            )}

            {/* Website */}
            {website && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < website_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{website_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < website_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {website_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>


            )}

            {/* app */}
            {app && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < app_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{app_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < app_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {app_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>

            )}

            {/* Youtube ads */}
            {youtubeads && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < youtubeads_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{youtubeads_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < youtubeads_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {youtubeads_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>

            )}

            {/* Google */}
            {google && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < googleques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{googleques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < googleques.length - 1 && (
                                        <p>
                                            <strong></strong> {googleques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>

            )}

            {/* instagram ads */}
            {instagramads && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < instagramads_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{instagramads_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < instagramads_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {instagramads_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>

            )}

            {/* Product branding */}
            {product && (
                <div className='row'>
                    <div className='bussiness' >
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anything specific in the product branding?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>

                    <div className='row qna-box'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={digitalprodHandler} style={{ backgroundColor: buttondigitalprod }}>
                                <p> Digital Product</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='digital-text' onClick={physicalHandler} style={{ backgroundColor: buttonphysical }} >
                                <p onClick={inputFunction}>Physical Product</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Service */}
            {service && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < service_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{service_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < service_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {service_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>

            )}

            {/* company */}
            {company && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < company_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{company_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < company_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {company_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>
            )}

            {/* personal */}
            {personal && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < personal_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{personal_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < personal_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {personal_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>

            )}

            {/* digital product */}
            {digitalprod && (
              <div className='row'>
              <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                  {currentQuestionIndex < digitalprod_ques.length ? (
                      <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                          <p>{digitalprod_ques[currentQuestionIndex]}</p>
                          {userResponses.map((response, index) => (
                              <div key={index}>
                                  <div className='res'>
                                  <p style={{justifyContent:'center'}}>
                                      <strong >Response:</strong> {response}
                                  </p></div>
                                  {/* {index === currentQuestionIndex - 1 &&  */}
                                  {index < digitalprod_ques.length - 1 && (
                                      <p>
                                          <strong></strong> {digitalprod_ques[index + 1]}
                                      </p>
                                  )}
                              </div>

                          ))}
                          <div className='row'>
                          <input
                              type="text" className='input-field  p-2'
                              placeholder='Enter the text here'
                              onKeyPress={(event) => {
                                  if (event.key === "Enter") {
                                      handleResponseSubmit(event.target.value);
                                      event.target.value = ""; // Clear input field
                                  }
                              }} />
                              </div>
                      </div>
                  ) : (
                      <div className='res'>
                      <p>Questionnaire complete! Thank you for your responses.</p>
                      <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                  </div>
                  )}
              </div>
          </div>

            )}

            {/* physical */}
            {physical && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < physical_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{physical_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < physical_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {physical_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>
            )}

            {/*press */}
            {press && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < press_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{press_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < press_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {press_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>

            )}

            {/* TV */}
            {tv && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < tv_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{tv_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < tv_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {tv_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>

            )}

            {/*video */}
            {video && (
                <div className='row'>
                <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                    {currentQuestionIndex < video_ques.length ? (
                        <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                            <p>{video_ques[currentQuestionIndex]}</p>
                            {userResponses.map((response, index) => (
                                <div key={index}>
                                    <div className='res'>
                                    <p style={{justifyContent:'center'}}>
                                        <strong >Response:</strong> {response}
                                    </p></div>
                                    {/* {index === currentQuestionIndex - 1 &&  */}
                                    {index < video_ques.length - 1 && (
                                        <p>
                                            <strong></strong> {video_ques[index + 1]}
                                        </p>
                                    )}
                                </div>
 
                            ))}
                            <div className='row'>
                            <input
                                type="text" className='input-field  p-2'
                                placeholder='Enter the text here'
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        handleResponseSubmit(event.target.value);
                                        event.target.value = ""; // Clear input field
                                    }
                                }} />
                                </div>
                        </div>
                    ) : (
                        <div className='res'>
                        <p>Questionnaire complete! Thank you for your responses.</p>
                        <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                    </div>
                    )}
                </div>
            </div>
            )}

            {/* photo */}
            {photo && (
               <div className='row'>
               <div className=' input--field p-3' style={{ color: "white", textAlign: "initial" }}>
                   {currentQuestionIndex < photo_ques.length ? (
                       <div style={{ marginTop: "2px", whiteSpace: "normal" }}>
                           <p>{photo_ques[currentQuestionIndex]}</p>
                           {userResponses.map((response, index) => (
                               <div key={index}>
                                   <div className='res'>
                                   <p style={{justifyContent:'center'}}>
                                       <strong >Response:</strong> {response}
                                   </p></div>
                                   {/* {index === currentQuestionIndex - 1 &&  */}
                                   {index < photo_ques.length - 1 && (
                                       <p>
                                           <strong></strong> {photo_ques[index + 1]}
                                       </p>
                                   )}
                               </div>

                           ))}
                           <div className='row'>
                           <input
                               type="text" className='input-field  p-2'
                               placeholder='Enter the text here'
                               onKeyPress={(event) => {
                                   if (event.key === "Enter") {
                                       handleResponseSubmit(event.target.value);
                                       event.target.value = ""; // Clear input field
                                   }
                               }} />
                               </div>
                       </div>
                   ) : (
                       <div className='res'>
                       <p>Questionnaire complete! Thank you for your responses.</p>
                       <button type='button' className='btn btn-primary' onClick={handleDownloadPdf}>Generate PDF</button>
                   </div>
                   )}
               </div>
           </div>
            )}
            {/* <Right_part/> */}
        </div>
    );
}
export default QnA_page;