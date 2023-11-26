import React from "react";
import "./BlogBody.css";
import about_6 from "../../images/useful_images_svg/about-6.webp";
import blog_1 from "../../images/useful_images_svg/blog_1.jpeg";
import blog_2 from "../../images/useful_images_svg/blog_2.jpeg";
import blog_3 from "../../images/useful_images_svg/blog_3.jpeg";
import parse from "html-react-parser";
import { SocialIcon } from "react-social-icons";
const BlogBody = ({ id }) => {
  var Heading = "";
  var Body = "";
  var Topics = "";
  var Topics_Parsed = "";
  var Body_Parsed = "";
  var min_read = "";
  var blog = blog_1;
  if (id === ":1") {
    blog = blog_1;
    Heading = " Modern day Food Quality Assessment Techniques";
    Body = `Food quality assessment is a critical aspect of the modern food industry, ensuring that the food we consume meets certain standards of safety, nutritional value, and sensory attributes. Advances in technology have led to the development of various sophisticated techniques and methods to assess food quality. In this blog post, we will explore some modern food quality assessment techniques and their significance in today's food industry.
    <dl>
  <dt>Spectroscopy and Spectrometry:</dt>
  <dd> Spectroscopy involves analyzing the interaction between matter and electromagnetic radiation. Spectrometry measures the intensity of these interactions. In food quality assessment, techniques like Near-Infrared (NIR) spectroscopy and Mass Spectrometry are commonly used. NIR spectroscopy can provide information about the composition of food products, such as moisture content, fat content, and protein content. Mass spectrometry is valuable for identifying and quantifying various compounds in complex food matrices.</dd>
  <dt>High-Performance Liquid Chromatography (HPLC):</dt>
  <dd>    HPLC is a powerful technique used to separate, identify, and quantify components in a food sample. It is extensively employed for analyzing vitamins, minerals, additives, pesticides, and other compounds in foods. HPLC ensures accurate measurement of the concentration of specific substances, contributing to food safety and quality.
  </dd>
  <dt>Polymerase Chain Reaction (PCR):</dt>
  <dd>    PCR is a molecular biology technique used to amplify DNA, enabling the detection of specific genetic material. In the food industry, PCR is crucial for identifying pathogens like bacteria and viruses. It helps in rapid and precise detection of contaminants, ensuring the safety of food products.
  </dd>
  <dt>Microbiological Analysis:</dt>
  <dd>    Microbiological analysis involves assessing food for the presence of microorganisms, including bacteria, yeast, molds, and pathogens. Advanced techniques like Next-Generation Sequencing (NGS) are employed to provide detailed insights into the microbial composition of food. This helps in identifying potential risks associated with microbial contamination.
  </dd>
  <dt>Image Analysis and Computer Vision:</dt>
  <dd>    Image analysis and computer vision technologies are increasingly being used to evaluate food quality based on visual characteristics. These techniques can assess aspects such as color, shape, size, and texture of food products. Automated systems can rapidly analyze large quantities of products, enhancing efficiency in quality control.
  </dd>
  <dt>Sensory Evaluation and Electronic Noses:</dt>
  <dd>    Sensory evaluation involves assessing food quality based on sensory attributes like taste, aroma, texture, and appearance. Electronic noses are electronic sensing devices that mimic the human olfactory system to detect and identify odors. These technologies are valuable for assessing the sensory aspects of food products objectively and consistently.
  </dd>
  <dt>Rapid Methods for Allergen Detection:</dt>
  <dd>    With the rise in food allergies, rapid and reliable methods for allergen detection are crucial. Techniques like Enzyme-Linked Immunosorbent Assay (ELISA) and Polymerase Chain Reaction (PCR) are commonly used to detect allergens in food products, ensuring compliance with labeling requirements and the safety of allergic individuals.
  </dd>
  </dl>In conclusion, modern food quality assessment techniques play a vital role in ensuring the safety, nutritional value, and overall quality of the food we consume. Advances in technology continue to enhance these methods, enabling more accurate, efficient, and rapid evaluation of food products. This ultimately contributes to a safer and more transparent food supply for consumers.`;
    Body_Parsed = parse(Body);
    Topics = ` <div className="col col-md-4">Quality</div>
    <div className="col col-md-4">Food</div>`;
    Topics_Parsed = parse(Topics);
    min_read = "10 MIN READ";
  } else if (id === ":2") {
    blog = blog_2;
    Heading = `"From Farm to Fork, Let's Minimize Food Waste and Feed the
    Nation"`;
    Body = `Food wastage is indeed a significant issue in India, as well as globally. In India, the problem of food wastage occurs at various stages of the food supply chain, from production and processing to distribution, retail, and consumption. Several factors contribute to high food wastage in the country:
    <dl>
    <dt>Lack of Proper Storage and Infrastructure:</dt>
    <dd>Many parts of India lack adequate storage and transportation infrastructure, especially in rural areas. This inadequacy leads to post-harvest losses due to inadequate storage facilities, causing perishable food items to spoil before they reach consumers.
    </dd>
    <dt>Inefficient Supply Chain Management:</dt>
    <dd>The food supply chain in India often involves multiple intermediaries, leading to delays and inefficiencies. These delays can result in food products losing their freshness and nutritional value, ultimately leading to wastage.
    </dd>
    <dt>Poor Packaging and Handling:</dt>
    <dd>Improper packaging and handling during transportation and storage can lead to damage and spoilage of food items. Inadequate packaging exposes food to contaminants and can accelerate their decay.
    </dd>
    <dt>Lack of Cold Storage Facilities:</dt>
    <dd>India faces a significant deficit in cold storage and refrigeration facilities, especially for perishable goods like fruits, vegetables, and dairy products. This lack of cold storage results in substantial post-harvest losses.
    </dd>
    <dt>Consumer Behavior and Preferences:</dt>
    <dd>Consumer preferences for aesthetically pleasing produce often lead to the rejection of imperfect or 'ugly' fruits and vegetables, contributing to food waste at the retail level.
    </dd>
    <dt>Overbuying and Overproduction:</dt>
    <dd>Overproduction by farmers and overbuying by consumers due to fears of scarcity or uncertainty can lead to surplus food that often goes to waste.
    </dd>
    <dt>Ineffective Food Management Policies:</dt>
    <dd>The Indian government has made commendable strides in food management policies, enhancing food security and distribution across the nation. However, there's room for improvement, particularly in optimizing supply chain efficiency, reducing food wastage, bolstering storage infrastructure, refining distribution networks, and fostering sustainable agricultural practices for long-term resilience. </dd>
    <dt>Lack of Awareness and Education:</dt>
    <dd>Insufficient awareness about the impacts of food wastage and the importance of minimizing waste is another factor. Educating both producers and consumers about responsible consumption and the consequences of wasting food is crucial.
    </dd>
    <dt>Feast-Famine Cycle in Celebrations and Events:</dt>
    <dd>During festivals, weddings, and other celebrations, there's often an excess of food prepared, leading to a significant amount of food being wasted.
    </dd></dl>
    Addressing the issue of food wastage in India requires a comprehensive approach involving various stakeholders, including farmers, producers, distributors, retailers, policymakers, and consumers:
    <dl>
    <dt>Improved Infrastructure and Storage Facilities:</dt>
    <dd>Investing in cold storage and transportation facilities to reduce post-harvest losses and improve the efficiency of the supply chain.
    </dd>
    <dt>Public Awareness and Education:</dt>
    <dd>Raising awareness about responsible consumption and the environmental, social, and economic impacts of food wastage can change consumer behavior.
    </dd>
    <dt>Efficient Supply Chain Management:</dt>
    <dd>Streamlining the supply chain to reduce delays and ensure that food products reach consumers in optimal condition.
    </dd>
    <dt>Food Recovery and Redistribution:</dt>
    <dd>Establishing mechanisms to collect surplus food from restaurants, events, and households and redistributing it to those in need can significantly reduce food wastage.
    </dd>
    <dt>Encouraging Sustainable Practices:</dt>
    <dd>Promoting sustainable farming and consumption practices that emphasize reducing waste and optimizing resource use.
    </dd>
    </dl>Addressing food wastage in India is a complex task that requires coordinated efforts from all stakeholders. By implementing sustainable practices, improving infrastructure, and fostering a culture of responsible consumption, we can significantly reduce food waste and contribute to a more sustainable food system.`;

    Body_Parsed = parse(Body);
    Topics = ` <div className="col-6 col-md-4">Food Wastage</div>
    <div className="col-6 col-md-4">Supply Chain</div>
    <div className ="col-6 col-md-4">Sustainability</div>`;
    Topics_Parsed = parse(Topics);
    min_read = "5 MIN READ";
  } else if (id === ":3") {
    Heading = `Understanding India's Low Farm Yields: A Global Perspective`;
    blog = blog_3;
    Body = `India, with its vast agricultural landscape and diverse agro-climatic zones, has been an agricultural hub for centuries. However, despite its potential, the country faces a persistent challenge: extremely low farm yields compared to several other nations across the globe. In this blog, we delve into the factors contributing to India's low farm yields and how it stands in comparison to agricultural yields worldwide.
    <dl>
    <dt>Historical Context:</dt>
    <dd>India has a rich agricultural history, being one of the world's earliest regions to practice agriculture. Traditional farming methods were sustainable and suited to the local environment. However, over the years, population growth and urbanization led to a shift in farming practices, necessitating higher yields to feed the increasing population.
    </dd>
    <dt>Land Fragmentation:</dt>
    <dd>One of the primary challenges faced by Indian farmers is land fragmentation. Subdivision of land over generations has resulted in small and often economically unviable land holdings. Farmers struggle to invest in modern farming techniques or machinery due to the limited size of their plots.
    </dd>
    <dt>Outdated Farming Practices:
    </dt>
    <dd>Many Indian farmers still employ traditional and outdated farming techniques that limit their yield potential. Reliance on age-old practices often hinders the adoption of modern technologies and efficient farming methods.
    </dd>
    <dt>Irrigation Issues:<dt>
    <dd>India heavily relies on monsoon rains for agriculture. Inadequate and erratic rainfall patterns can severely impact crop yields. Additionally, the lack of efficient irrigation systems in many regions further exacerbates this problem.
    </dd>
    <dt>Soil Health and Fertility:</dt>
    <dd>Degraded soil health and fertility due to excessive use of chemical fertilizers, inadequate crop rotation, and poor organic matter content contribute to reduced yields. Sustainable soil management practices are vital to improving yields sustainably.
    </dd>
    <dt>Access to Credit and Technology:</dt>
    <dd>Smallholder farmers often struggle to access credit for purchasing quality seeds, fertilizers, and modern machinery. Additionally, limited knowledge and access to advanced agricultural technologies hinder their ability to optimize yields.
    </dd>
    <dt>Lack of Agro-Processing Facilities:</dt>
    <dd>The absence of nearby agro-processing facilities forces farmers to sell raw produce, often at low prices. This limits their income potential and discourages investment in enhancing agricultural productivity.
    </dd>
    <dt>Policy and Government Intervention:</dt>
    <dd>Government policies related to agricultural practices, subsidies, and market regulations significantly impact farm yields. Policy shifts and their effective implementation are crucial in fostering agricultural growth.
    </dd>
   <dt>Comparison with Global Yields:</dt>
    <dd>When comparing India's farm yields with other countries globally, stark differences are evident. Developed nations with advanced agricultural practices, extensive mechanization, efficient irrigation, and effective land management often exhibit significantly higher yields per hectare compared to India.
    Countries like the United States, China, Brazil, and several European nations boast higher yields owing to their adoption of modern farming technologies, research-backed practices, and large-scale, well-managed agricultural operations.</dd>
    <dt>Conclusion:</dt>
    <dd>India's struggle with low farm yields is a multifaceted challenge encompassing historical, social, economic, and policy-related factors. Addressing these issues necessitates a holistic approach involving government intervention, sustainable farming practices, better irrigation infrastructure, access to credit and technology, and education for farmers. By learning from successful global models and implementing effective strategies, India can work towards significantly improving its farm yields and ensuring food security for its growing population.</dd> </dl>`;
    Body_Parsed = parse(Body);
    Topics = ` <div className="col-6 col-md-4">Agriculture</div>
    <div className="col-6 col-md-4">Farm Yields</div>
    <div className ="col-6 col-md-4">FoodProduction</div>`;
    Topics_Parsed = parse(Topics);
    min_read = "5 MIN READ";
  }
  return (
    <div className="blog">
      <div className="Blog_Head">
        <div className="row">
          <div className="col-lg-6">
            <h4 style={{ textAlign: "left" }}>{Heading}</h4>
            <div className="Right">
              <div className="by">
                <p>
                  BY <span className="auth_name">Nikhileswar Reddy P</span>
                </p>
              </div>
            </div>
            <div className="Left">
              <div className="reading_time">
                <div className="row read-out">
                  <div className="col read-in">
                    <div>{min_read}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-30"></div>
            <div className="Left">
              <div className="topics-head">
                <h1>Topics: </h1>
              </div>
              <div className="tags">
                <div className="row">{Topics_Parsed}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="blog_img" src={blog} alt="blog"></img>
          </div>
        </div>
      </div>

      <div className="Blog_Body display-linebreak">{Body_Parsed}</div>
      <hr className="hr"></hr>
      <div className="Blog_Footer">
        <div className="row">
          <div className="col-4">
            <img
              width={"20px"}
              height={"20px"}
              className="blog_author"
              src={about_6}
              alt="blog_author"
            />
          </div>
          <div className="col-8">
            <div className="row">
              <h4>
                Written by <span className="orange">Nikhileswar Reddy P</span>
              </h4>
            </div>
            <div className="row">
              <p>Web Development Intern at Doctorspectra</p>
            </div>
            <div className="row">
              <SocialIcon
                url="https://www.linkedin.com/in/nikhileswar-reddy-pochimireddy-46682720b/"
                bgColor="white"
                fgColor="#fca253"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
