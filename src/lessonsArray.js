import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://bmmrprstsymncljksbil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbXJwcnN0c3ltbmNsamtzYmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjE3NDYsImV4cCI6MjA3NDEzNzc0Nn0.YTirrcAk3wWje0-tLW-E7T6GNHBgBRPEoBI26uwUjrY')

const lessons  =[
    {
  "id": 1,
  "topic_name": "Air Pollution: Causes, Effects, and Solutions",
  "topic_description": "Understanding the causes, consequences, and ways to reduce air pollution.",
  "isCompleted": false,
  "category": "Pollution",
  "eco_coins": 150,
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gtXIPBzKrvf919JlPqxMMwaxf7csc1Uoow&s",
  "para": [
    {
      "subheading": "Introduction to Air Pollution",
      "content": "Air pollution is one of the most pressing environmental issues of our time. It refers to the presence of harmful substances in the atmosphere that can negatively affect human health, ecosystems, and the planet’s climate system. Industrialization, urbanization, and technological growth have intensified the problem, making it a global concern."
    },
    {
      "subheading": "Causes of Air Pollution",
      "content": "The causes of air pollution can be broadly divided into natural and human-made sources. Natural sources include volcanic eruptions, dust storms, and forest fires. Human-made sources are more significant today, including industrial emissions, vehicle exhaust, burning of fossil fuels, agricultural activities, and deforestation. These activities release pollutants such as carbon dioxide, sulfur dioxide, nitrogen oxides, and particulate matter into the air."
    },
    {
      "subheading": "Effects on Human Health and Environment",
      "content": "Air pollution has severe effects on human health, causing respiratory diseases, cardiovascular issues, strokes, and premature deaths. Millions of people die every year due to polluted air. Environmentally, it contributes to climate change, damages crops, acidifies lakes, and disrupts ecosystems. Notable incidents include the Great Smog of London in 1952 and severe smog events in Delhi and Beijing."
    },
    {
      "subheading": "Solutions and Preventive Measures",
      "content": "Addressing air pollution requires global, national, and individual efforts. Governments can enforce stricter emission standards, promote renewable energy, and invest in public transportation. Industries should adopt cleaner technologies. Individuals can carpool, use bicycles, plant trees, avoid burning waste, and support eco-friendly policies. International cooperation is also critical, as seen in agreements like the Paris Accord."
    },
    {
      "subheading": "Conclusion",
      "content": "Air pollution is both a global crisis and a local challenge. While the problem is severe, it can be managed through technology, awareness, and collective action. Protecting air quality ensures environmental sustainability and secures the health and future of generations to come."
    }
  ]
},
{
  "id": 2,
  "topic_name": "Water Pollution and Conservation of Water Resources",
  "topic_description": "Understanding the causes, effects, and preventive measures of water pollution, along with ways to conserve water resources.",
  "isCompleted": false,
  "category": "Pollution",  
  "eco_coins": 170, 
  "imgUrl": "https://www.living-water.co.uk/wp-content/uploads/2018/12/pollution-garbage.jpg",
  "para": [
    {
      "subheading": "Introduction to Water Pollution",
      "content": "Water pollution is one of the most critical environmental challenges faced by humanity today. It refers to the contamination of water bodies such as rivers, lakes, oceans, and groundwater by harmful substances, making them unsafe for human use, aquatic life, and the environment. Industrial growth, urbanization, agricultural activities, and improper waste management have drastically increased the levels of pollutants entering our water systems, threatening public health, biodiversity, and ecological balance. Understanding the sources and effects of water pollution is the first step toward finding effective solutions and promoting sustainable water management practices."
    },
    {
      "subheading": "Causes of Water Pollution",
      "content": "Water pollution arises from both natural and human-made sources, though human activities dominate in modern times. Major human-induced causes include industrial discharges containing toxic chemicals, heavy metals, and untreated wastewater; agricultural runoff carrying pesticides, fertilizers, and animal waste; sewage and domestic waste; and oil spills. Additionally, urbanization leads to stormwater runoff containing harmful substances from roads and construction sites. Natural causes such as sedimentation, erosion, and certain microbial activities also contribute, but their impact is generally lower compared to anthropogenic pollution."
    },
    {
      "subheading": "Types of Water Pollutants",
      "content": "Water pollutants can be classified into several categories. Chemical pollutants include acids, heavy metals like mercury and lead, and nutrients such as nitrogen and phosphorus from fertilizers. Biological pollutants include bacteria, viruses, and other pathogens, often originating from untreated sewage. Physical pollutants include suspended solids, plastics, and debris that affect water clarity and aquatic life. Emerging contaminants, such as pharmaceuticals and microplastics, pose new challenges for water quality management. Understanding the types of pollutants helps in developing targeted solutions for water purification and conservation."
    },
    {
      "subheading": "Effects of Water Pollution",
      "content": "The impacts of water pollution are severe and wide-ranging. For human health, consuming contaminated water can lead to waterborne diseases such as cholera, dysentery, typhoid, and hepatitis. Polluted water adversely affects aquatic ecosystems, causing the death of fish and other marine species, disrupting food chains, and reducing biodiversity. Excessive nutrients in water lead to eutrophication, resulting in algal blooms that deplete oxygen and create dead zones. Economically, water pollution increases the cost of water treatment, reduces fishery yields, and affects agriculture. Socially, it impacts communities relying on freshwater for drinking, cooking, and sanitation."
    },
    {
      "subheading": "Major Case Studies",
      "content": "Globally, several water bodies have suffered significant pollution incidents. The Ganges in India suffers from industrial, agricultural, and domestic pollution, affecting millions dependent on its waters. The Citarum River in Indonesia is considered one of the most polluted rivers due to heavy industrial discharge. In the United States, the Flint water crisis highlighted how contamination with lead in municipal water can pose serious health risks. Such case studies demonstrate the urgent need for regulatory frameworks, proper waste treatment, and public awareness to prevent water pollution on a large scale."
    },
    {
      "subheading": "Preventive Measures and Solutions",
      "content": "Combating water pollution requires integrated efforts at multiple levels. Governments should enforce stricter regulations on industrial effluents, promote wastewater treatment, and implement monitoring programs. Agricultural practices can be improved by using organic fertilizers, proper irrigation techniques, and reducing chemical runoff. Community-level initiatives, such as waste segregation, preventing dumping into rivers, and organizing river clean-up drives, play a crucial role. Individuals can contribute by reducing the use of plastics, avoiding the disposal of chemicals into drains, and adopting water-saving practices. Technological innovations like water purification plants, bio-remediation, and smart monitoring systems also provide effective solutions."
    },
    {
      "subheading": "Conservation of Water Resources",
      "content": "Conserving water is as critical as preventing its pollution. Efficient use of water in households, industries, and agriculture can reduce stress on freshwater sources. Rainwater harvesting, groundwater recharge, watershed management, and sustainable irrigation practices help maintain water availability. Protecting wetlands, forests, and watersheds ensures natural filtration and replenishment of water bodies. Education and awareness campaigns encourage responsible water usage and highlight the interconnection between water conservation and environmental sustainability. Conserving water ensures its availability for future generations while protecting ecosystems and human health."
    },
    {
      "subheading": "Role of International and National Policies",
      "content": "International frameworks like the United Nations Sustainable Development Goal 6 emphasize clean water and sanitation for all. Treaties and protocols, such as the Water Convention and national environmental laws, provide guidelines for pollution control, sustainable usage, and resource management. Countries are adopting integrated water resource management strategies to balance development with conservation. Public participation, transparent governance, and collaboration between governmental and non-governmental organizations are crucial for implementing policies effectively and ensuring compliance."
    },
    {
      "subheading": "Conclusion",
      "content": "Water pollution and the depletion of water resources are pressing global challenges that require immediate attention. Through a combination of scientific innovation, policy intervention, community participation, and individual responsibility, it is possible to reduce pollution and ensure sustainable water management. Protecting water is not merely an environmental concern but a fundamental aspect of public health, economic development, and ecological balance. Every effort, from reducing chemical discharge to conserving water, contributes toward a cleaner, safer, and more sustainable planet."
    }
  ]
},
{
  "id": 3,
  "topic_name": "Global Warming and the Greenhouse Effect",
  "topic_description": "Exploring the causes, impacts, and solutions of global warming, along with understanding the greenhouse effect.",
  "isCompleted": false,
  "category": "Global Warming",
  "eco_coins": 200,
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9QCXOiiGPwnbGi7KATg7hhu_HLKqOKeMOg&s",
  "para": [
    {
      "subheading": "Introduction to Global Warming",
      "content": "Global warming refers to the long-term increase in Earth’s average surface temperature due to the buildup of greenhouse gases in the atmosphere. This phenomenon is one of the most pressing environmental issues of the 21st century, threatening ecosystems, human health, and global economic stability. While the planet’s climate has naturally varied over millions of years, the current rate of temperature increase is unprecedented, largely driven by human activities such as fossil fuel combustion, deforestation, and industrialization. Understanding global warming requires examining the greenhouse effect, its causes, consequences, and strategies for mitigation."
    },
    {
      "subheading": "Understanding the Greenhouse Effect",
      "content": "The greenhouse effect is a natural process that warms the Earth’s surface. When sunlight reaches the Earth, some of it is absorbed, and the rest is reflected back toward space as infrared radiation. Greenhouse gases, including carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and water vapor, trap some of this outgoing heat, keeping the planet warm enough to sustain life. However, human activities have dramatically increased the concentration of these gases, intensifying the greenhouse effect and causing the Earth’s average temperature to rise—a process known as global warming."
    },
    {
      "subheading": "Causes of Global Warming",
      "content": "The primary cause of global warming is the excessive emission of greenhouse gases. Key contributors include the burning of fossil fuels for electricity, heat, and transportation; deforestation, which reduces the Earth’s capacity to absorb CO2; agricultural practices that release methane and nitrous oxide; and industrial processes that emit various pollutants. Urbanization and energy-intensive lifestyles further amplify greenhouse gas emissions. Natural factors, such as volcanic eruptions and variations in solar radiation, play a minor role in comparison to human-induced factors."
    },
    {
      "subheading": "Effects on Climate and Ecosystems",
      "content": "Global warming has far-reaching impacts on climate systems and ecosystems. Rising temperatures lead to melting glaciers and polar ice caps, resulting in sea-level rise that threatens coastal regions. Changes in precipitation patterns cause droughts, floods, and extreme weather events. Ecosystems are disrupted as habitats shift, endangering biodiversity and leading to species extinction. Coral reefs face bleaching due to warmer oceans, and forest ecosystems are more prone to wildfires. These environmental changes also have social and economic consequences, affecting agriculture, water availability, and human health."
    },
    {
      "subheading": "Impact on Human Societies",
      "content": "Global warming directly affects human societies through extreme weather events, heatwaves, and rising sea levels that displace populations. Health risks include heat-related illnesses, vector-borne diseases, and respiratory issues caused by air pollution. Agricultural productivity is affected by altered rainfall and temperature patterns, leading to food insecurity. Economically, damages from natural disasters, loss of property, and reduced productivity strain national budgets. Vulnerable communities, especially in low-income countries, face disproportionate risks due to limited resources and adaptive capacity."
    },
    {
      "subheading": "Mitigation Strategies",
      "content": "Mitigation involves reducing or preventing the emission of greenhouse gases. Key strategies include transitioning to renewable energy sources such as solar, wind, and hydroelectric power; improving energy efficiency in homes, industries, and transportation; afforestation and reforestation to enhance carbon sequestration; and adopting sustainable agricultural practices. Carbon capture and storage (CCS) technologies, as well as innovations in green building design and electric mobility, also play an important role. Policy interventions, international agreements like the Paris Agreement, and public awareness campaigns are crucial for effective mitigation."
    },
    {
      "subheading": "Adaptation Strategies",
      "content": "Adaptation focuses on adjusting human systems and infrastructure to minimize the negative impacts of global warming. Measures include building flood defenses, developing drought-resistant crops, improving water management, and creating early-warning systems for extreme weather events. Urban planning that considers climate risks, ecosystem-based approaches, and community preparedness programs strengthen resilience. Both mitigation and adaptation are necessary to tackle the multifaceted challenges posed by global warming effectively."
    },
    {
      "subheading": "International Cooperation",
      "content": "Global warming is a global challenge that requires international cooperation. Treaties like the Kyoto Protocol and the Paris Agreement set targets for greenhouse gas reductions and promote sustainable development. Nations collaborate on climate research, funding for clean energy projects, and sharing technologies. Multilateral efforts ensure that countries, especially developing nations, receive support to transition to low-carbon economies and adapt to climate impacts."
    },
    {
      "subheading": "Conclusion",
      "content": "Global warming and the intensified greenhouse effect pose a serious threat to life on Earth. While human activities are the primary drivers, coordinated global action can mitigate their impact. By combining policy measures, technological innovations, sustainable practices, and public awareness, it is possible to reduce greenhouse gas emissions and adapt to unavoidable changes. Protecting our climate is essential not only for current generations but also for the health, safety, and prosperity of future generations."
    }
  ]
},
{
  "id": 4,
  "topic_name": "Importance of Environmental Awareness and Education",
  "topic_description": "Exploring why environmental awareness and education are crucial for sustainable development and ecological balance.",
  "isCompleted": false,
  "category": "Environmental Studies",
  "eco_coins": 200,
  "imgUrl": "https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/11/raising-environmentally-aware-young-people.png",
  "para": [
    {
      "subheading": "Introduction to Environmental Awareness",
      "content": "Environmental awareness refers to understanding the natural world and recognizing the impact of human activities on the environment. It involves knowledge about issues like pollution, climate change, deforestation, biodiversity loss, and resource depletion. Raising awareness helps individuals and communities realize the urgency of sustainable living and the need to protect ecosystems. Environmental awareness is the first step toward fostering responsible behavior and encouraging actions that minimize negative environmental impacts."
    },
    {
      "subheading": "Role of Education in Promoting Awareness",
      "content": "Education plays a pivotal role in shaping environmental consciousness. Through formal education in schools, colleges, and universities, students learn about ecological principles, conservation methods, and sustainable practices. Informal education, including community programs, workshops, and media campaigns, reinforces this knowledge and encourages people of all ages to participate in environmental protection. Education equips individuals with the skills to analyze environmental problems critically and find innovative solutions."
    },
    {
      "subheading": "Importance for Sustainable Development",
      "content": "Environmental awareness and education are essential for achieving sustainable development, which balances economic growth, social well-being, and environmental protection. Educated citizens are more likely to adopt sustainable practices, such as reducing waste, conserving energy and water, supporting renewable energy, and engaging in tree plantation drives. Governments and organizations rely on an informed population to implement policies effectively, manage resources wisely, and create a sustainable future."
    },
    {
      "subheading": "Impact on Individual Behavior",
      "content": "When individuals are aware of environmental issues, they tend to make eco-friendly choices in daily life. This includes reducing single-use plastics, conserving water and electricity, participating in recycling programs, using public transport or bicycles, and supporting green initiatives. Behavioral changes at the individual level collectively have a significant impact on reducing pollution, conserving natural resources, and mitigating climate change. Awareness empowers people to become responsible stewards of the environment."
    },
    {
      "subheading": "Community Engagement and Participation",
      "content": "Environmental awareness encourages communities to take collective action. Community-driven initiatives, such as neighborhood clean-up drives, tree plantation campaigns, local conservation projects, and awareness workshops, play a key role in promoting sustainability. Educated communities are also more likely to participate in policy discussions, hold authorities accountable for environmental decisions, and adopt innovative solutions tailored to local environmental challenges."
    },
    {
      "subheading": "Role of Media and Technology",
      "content": "Media and technology amplify environmental awareness by disseminating information widely and quickly. Television, newspapers, social media, and digital platforms educate the public about pollution, climate change, endangered species, and conservation methods. Online courses, apps, and interactive platforms provide opportunities for individuals to learn about environmental science, track their ecological footprint, and participate in eco-friendly initiatives. Technology also facilitates research, monitoring, and data collection essential for informed decision-making."
    },
    {
      "subheading": "Environmental Education in Schools",
      "content": "Incorporating environmental education in school curricula ensures that the next generation grows up with an understanding of ecological challenges. Subjects can cover topics such as ecosystems, biodiversity, renewable energy, and waste management. Hands-on activities like gardening, recycling projects, field trips, and science experiments foster practical understanding. Early exposure helps students internalize the importance of protecting the environment and encourages lifelong sustainable habits."
    },
    {
      "subheading": "Global Importance of Environmental Awareness",
      "content": "Environmental awareness is not limited to local issues; it has global implications. Climate change, deforestation, ocean pollution, and biodiversity loss are worldwide challenges requiring collective awareness and action. International campaigns, such as Earth Day, World Environment Day, and UN Sustainable Development Goals, emphasize the importance of global environmental education. Awareness fosters cross-border cooperation, knowledge exchange, and global responsibility to protect the planet for future generations."
    },
    {
      "subheading": "Conclusion",
      "content": "Environmental awareness and education are foundational for creating a sustainable and resilient society. By informing individuals, shaping behaviors, and promoting community action, they enable responsible stewardship of natural resources. Integrating environmental knowledge into daily life, education systems, and policy-making ensures that humanity can address current challenges and safeguard the Earth for future generations. Awareness transforms knowledge into action, making it the most powerful tool for environmental conservation."
    }
  ]
},
{
  "id": 5,
  "topic_name": "Climate Change and Its Global Impact",
  "topic_description": "Understanding the causes, consequences, and global implications of climate change.",
  "isCompleted": false,
  "category": "Climat", 
  "eco_coins": 180,
  "imgUrl": "https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/internal_resources/2710/Effects_page_triptych.jpeg?w=2963&h=1459&fit=clip&crop=faces%2Cfocalpoint",
  "para": [
    {
      "subheading": "Introduction to Climate Change",
      "content": "Climate change refers to long-term alterations in temperature, precipitation patterns, wind, and other aspects of Earth’s climate system. While climate has naturally varied over millennia, recent decades have seen an unprecedented acceleration in changes primarily due to human activities. The rise in greenhouse gases, industrialization, deforestation, and overconsumption of natural resources are key drivers. Climate change affects all regions of the world and has far-reaching consequences for ecosystems, human health, and economic stability."
    },
    {
      "subheading": "Causes of Climate Change",
      "content": "The primary causes of climate change are anthropogenic. Burning fossil fuels for energy releases significant amounts of carbon dioxide (CO2) and other greenhouse gases into the atmosphere. Deforestation reduces the planet’s capacity to absorb CO2. Industrial processes emit methane, nitrous oxide, and other pollutants. Agriculture contributes via livestock emissions and fertilizer usage. Natural factors, such as volcanic activity and solar variability, also play a minor role, but human-induced activities dominate the current trends."
    },
    {
      "subheading": "Global Effects on Weather Patterns",
      "content": "Climate change disrupts global weather patterns, causing extreme events such as hurricanes, floods, droughts, heatwaves, and cold spells. Increased global temperatures intensify storms and shift rainfall patterns, affecting agricultural productivity and water availability. Melting glaciers and polar ice caps contribute to sea-level rise, leading to coastal erosion, displacement of communities, and loss of habitats. Unpredictable weather impacts food security and the livelihoods of millions worldwide."
    },
    {
      "subheading": "Impact on Ecosystems and Biodiversity",
      "content": "Ecosystems are highly sensitive to climate fluctuations. Rising temperatures and changing precipitation patterns disrupt habitats, leading to species migration, altered reproductive cycles, and even extinction. Coral reefs are particularly vulnerable to ocean warming and acidification, while forests face increased susceptibility to wildfires and pest outbreaks. Loss of biodiversity affects ecosystem services such as pollination, water purification, and carbon sequestration, further exacerbating environmental degradation."
    },
    {
      "subheading": "Socio-Economic Impacts",
      "content": "Climate change has profound socio-economic implications. Extreme weather damages infrastructure, disrupts trade, and imposes financial burdens on governments and communities. Agricultural losses threaten food security, leading to higher prices and social instability. Human health is affected by heatwaves, vector-borne diseases, and poor air quality. Vulnerable populations in developing countries are disproportionately affected due to limited adaptive capacity and resources, increasing global inequality."
    },
    {
      "subheading": "Mitigation Strategies",
      "content": "Mitigating climate change involves reducing greenhouse gas emissions and enhancing carbon sinks. Transitioning to renewable energy sources such as solar, wind, and hydroelectric power is essential. Energy efficiency in buildings, transportation, and industries reduces consumption. Afforestation, reforestation, and soil management enhance carbon sequestration. Policy frameworks, international agreements like the Paris Agreement, and carbon trading mechanisms are critical for global cooperation."
    },
    {
      "subheading": "Adaptation Strategies",
      "content": "Adaptation focuses on preparing for and minimizing the negative effects of climate change. Strategies include constructing resilient infrastructure, developing drought-resistant crops, implementing water management systems, and creating early-warning systems for extreme events. Urban planning that considers climate risks, ecosystem restoration, and community preparedness enhances resilience. Both mitigation and adaptation are necessary to address climate change comprehensively."
    },
    {
      "subheading": "Global Cooperation and Policy",
      "content": "Addressing climate change requires international collaboration. Global treaties such as the Kyoto Protocol and Paris Agreement set emission reduction targets and provide mechanisms for funding, technology transfer, and monitoring. Countries share research, implement sustainable development policies, and participate in climate diplomacy. Effective cooperation ensures that both developed and developing nations can work together to combat climate change and achieve environmental sustainability."
    },
    {
      "subheading": "Conclusion",
      "content": "Climate change is one of the most serious challenges facing humanity, with wide-ranging impacts on ecosystems, societies, and economies. While the scale of the problem is daunting, coordinated global action, technological innovation, sustainable policies, and public awareness can mitigate its effects. Protecting the climate is essential for ensuring a safe, healthy, and equitable future for current and future generations."
    }
  ]
},
{
  "id": 6,
  "topic_name": "Deforestation and Forest Conservation",
  "topic_description": "Examining the causes, impacts, and conservation strategies related to deforestation and the importance of forests.",
  "isCompleted": false,
  "category": "Deforestation",
  "eco_coins": 170,
    "imgUrl": "https://cdn11.bigcommerce.com/s-dnybxc6/product_images/uploaded_images/deforestation-facts-and-statistics.jpg",
  "para": [
    {
      "subheading": "Introduction to Deforestation",
      "content": "Deforestation refers to the large-scale removal of forests, often resulting in damage to the environment, loss of biodiversity, and disruption of ecological balance. Forests play a vital role in maintaining the planet's climate, supporting wildlife, and providing resources such as timber, medicine, and food. Human activities, including agriculture, urbanization, and industrialization, have accelerated deforestation, making it one of the most pressing environmental challenges globally."
    },
    {
      "subheading": "Causes of Deforestation",
      "content": "The main causes of deforestation include agricultural expansion, logging for timber, urbanization, and infrastructure development. Slash-and-burn techniques and illegal logging also contribute significantly. In many regions, forests are cleared to cultivate crops or graze livestock. Commercial exploitation for paper, furniture, and fuel further accelerates forest loss. Natural causes like forest fires and pests can also contribute, but human activity is the primary driver."
    },
    {
      "subheading": "Impact on Biodiversity",
      "content": "Deforestation leads to the destruction of habitats, putting countless plant and animal species at risk. Loss of biodiversity affects ecosystem stability and reduces nature’s capacity to provide essential services, such as pollination, water purification, and carbon sequestration. Iconic species like tigers, orangutans, and many bird species face population declines due to habitat fragmentation. This disruption can trigger cascading effects throughout entire ecosystems."
    },
    {
      "subheading": "Effects on Climate and Environment",
      "content": "Forests are crucial in regulating the Earth's climate by absorbing carbon dioxide and producing oxygen. Deforestation increases greenhouse gas concentrations, contributing to global warming. It also disrupts rainfall patterns, leads to soil erosion, reduces groundwater recharge, and increases the risk of floods and droughts. Forests act as natural buffers against climate extremes, so their loss exacerbates environmental instability."
    },
    {
      "subheading": "Socio-Economic Impacts",
      "content": "Deforestation affects communities that rely on forests for food, fuel, medicine, and employment. Indigenous populations often lose their homes and livelihoods. Economic activities like agriculture and logging provide short-term gains but can lead to long-term resource depletion. Tourism and ecosystem services, such as clean water and fertile soil, are also negatively impacted, demonstrating the interconnectedness of forests and human well-being."
    },
    {
      "subheading": "Forest Conservation Strategies",
      "content": "Forest conservation involves protecting existing forests, restoring degraded lands, and promoting sustainable use of forest resources. Strategies include afforestation, reforestation, controlled logging, and community-based forest management. Legal protections, such as national parks, wildlife sanctuaries, and protected areas, help safeguard critical habitats. Policies encouraging sustainable agriculture, reducing illegal logging, and promoting eco-tourism also contribute to conservation efforts."
    },
    {
      "subheading": "Role of Education and Awareness",
      "content": "Raising awareness about the importance of forests is crucial for their preservation. Environmental education in schools and communities encourages responsible behavior and participation in conservation initiatives. Campaigns, workshops, and media coverage help people understand the ecological, economic, and cultural value of forests. Educated communities are more likely to engage in tree planting, forest monitoring, and sustainable practices."
    },
    {
      "subheading": "Global Cooperation and Policies",
      "content": "International treaties and agreements, such as the United Nations’ REDD+ program, promote forest conservation and sustainable management. Countries collaborate to combat illegal logging, deforestation, and climate impacts. Global initiatives encourage funding for reforestation, forest restoration, and carbon credit projects. Such cooperation ensures that forest conservation transcends national boundaries and benefits the planet as a whole."
    },
    {
      "subheading": "Conclusion",
      "content": "Deforestation poses severe threats to biodiversity, climate, and human well-being, but effective forest conservation can mitigate these impacts. By combining education, sustainable management practices, legal protections, and international cooperation, humanity can preserve forests for future generations. Protecting forests is not just an environmental necessity but a moral and practical responsibility to maintain ecological balance and ensure the survival of countless species, including humans."
    }
  ]
},
{
  "id": 7,
  "topic_name": "Ocean Pollution and Marine Conservation",
  "topic_description": "Understanding the causes, impacts, and conservation strategies for ocean pollution and protecting marine ecosystems.",
  "isCompleted": false,
  "category": "Pollution",
  "eco_coins": 150,
    "imgUrl": "https://www.reusethisbag.com/wp-content/uploads/2021/08/ocean-pollution-plastics.jpg.webp",

  "para": [
    {
      "subheading": "Introduction to Ocean Pollution",
      "content": "Ocean pollution is the introduction of harmful substances, including chemicals, plastics, and biological contaminants, into the marine environment. It affects water quality, marine life, and ecosystems, threatening biodiversity and human health. Human activities, industrialization, and urbanization have accelerated the problem, making ocean pollution a critical environmental challenge that requires immediate attention and effective management."
    },
    {
      "subheading": "Causes of Ocean Pollution",
      "content": "Ocean pollution arises from multiple sources, primarily human-induced. Land-based sources include industrial discharge, agricultural runoff containing pesticides and fertilizers, untreated sewage, and plastic waste. Marine-based sources include oil spills, shipping activities, and dumping of waste into oceans. Microplastics, heavy metals, and chemical pollutants accumulate in water and sediments, affecting marine organisms at every level of the food chain."
    },
    {
      "subheading": "Types of Ocean Pollutants",
      "content": "Pollutants in oceans can be classified into chemical, biological, and physical types. Chemical pollutants include heavy metals like mercury and lead, petroleum hydrocarbons, and toxic industrial compounds. Biological pollutants include pathogens from untreated sewage. Physical pollutants include plastics, microplastics, and debris. Emerging contaminants, such as pharmaceuticals and nanoparticles, pose new threats to marine life and ecosystems."
    },
    {
      "subheading": "Impact on Marine Life",
      "content": "Ocean pollution has devastating effects on marine life. Fish, turtles, seabirds, and marine mammals ingest or become entangled in plastics, leading to injury or death. Chemical contaminants disrupt reproductive systems and cause bioaccumulation of toxins through the food chain. Coral reefs are particularly vulnerable to pollutants and acidification, leading to bleaching and habitat loss. Overall, pollution reduces biodiversity and destabilizes ecosystems."
    },
    {
      "subheading": "Impact on Human Societies",
      "content": "Humans are affected indirectly through the consumption of contaminated seafood, exposure to polluted coastal waters, and economic losses in fisheries and tourism. Waterborne diseases increase in regions affected by ocean pollution. Communities dependent on marine resources for livelihood face declining fish stocks, reduced income, and food insecurity. Long-term environmental degradation also affects climate regulation and ecosystem services, posing a global risk."
    },
    {
      "subheading": "Marine Conservation Strategies",
      "content": "Marine conservation involves protecting marine ecosystems and promoting sustainable use of ocean resources. Key strategies include creating marine protected areas (MPAs), regulating fishing practices, reducing plastic waste, and controlling industrial discharge. Restoration projects, such as coral reef rehabilitation and mangrove reforestation, enhance ecosystem resilience. Conservation efforts rely on scientific research, policy implementation, and community engagement to ensure effectiveness."
    },
    {
      "subheading": "Role of Education and Awareness",
      "content": "Raising awareness about ocean pollution is essential for conservation. Environmental education, public campaigns, and media coverage inform people about the causes and effects of marine pollution. Schools, NGOs, and government programs encourage responsible behavior, such as reducing single-use plastics, proper waste disposal, and participation in coastal clean-up initiatives. Awareness motivates individuals and communities to take collective action to protect oceans."
    },
    {
      "subheading": "Global Policies and Cooperation",
      "content": "International cooperation is crucial for addressing ocean pollution. Agreements like the United Nations Convention on the Law of the Sea (UNCLOS) and initiatives such as the Global Partnership on Marine Litter promote sustainable marine management. Countries collaborate to reduce shipping emissions, prevent oil spills, and manage transboundary waste. Global research, funding, and technology sharing enhance marine conservation efforts and ensure long-term sustainability."
    },
    {
      "subheading": "Conclusion",
      "content": "Ocean pollution poses a serious threat to marine ecosystems, human health, and the global economy. Effective conservation requires a combination of policy interventions, community participation, education, and scientific innovation. Protecting oceans is essential for maintaining biodiversity, supporting livelihoods, and sustaining the planet’s environmental balance. Collective action today ensures healthier oceans for future generations."
    }
  ]
},
{
  "id": 8,
  "topic_name": "Role of Individuals in Environmental Protection",
  "topic_description": "Understanding how individual actions contribute to environmental conservation and sustainable living.",
  "isCompleted": false,
  "category": "Awareness",
  "eco_coins": 100,
  "imgUrl": "https://media.licdn.com/dms/image/v2/D4E12AQFPe6jwC_RDqw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704474081800?e=2147483647&v=beta&t=i18o701Bo0RXqeqk65gqq1m-xTfdLNCbo2J_PVOLhGY",
  "para": [
    {
      "subheading": "Introduction to Individual Responsibility",
      "content": "Environmental protection is not solely the responsibility of governments, organizations, or industries; individuals play a crucial role in safeguarding the planet. Small actions, when multiplied across communities, can lead to significant environmental benefits. Understanding one’s personal impact on air, water, soil, and biodiversity is the first step toward adopting eco-friendly habits and contributing to a sustainable future."
    },
    {
      "subheading": "Reducing Waste and Promoting Recycling",
      "content": "Individuals can reduce environmental impact by minimizing waste production and actively participating in recycling programs. Using reusable bags, avoiding single-use plastics, and segregating waste for composting or recycling help conserve natural resources. Recycling materials like paper, plastic, glass, and metals reduces the need for raw resource extraction, lowers energy consumption, and decreases pollution levels."
    },
    {
      "subheading": "Conserving Energy and Water",
      "content": "Conserving energy and water at the individual level reduces environmental stress and greenhouse gas emissions. Simple measures, such as switching to energy-efficient appliances, turning off lights when not in use, using public transportation, and reducing water wastage, contribute to resource conservation. Awareness of daily consumption patterns encourages responsible usage and supports global efforts to combat climate change."
    },
    {
      "subheading": "Planting Trees and Protecting Green Spaces",
      "content": "Tree planting is one of the most direct ways individuals can contribute to environmental protection. Trees absorb carbon dioxide, improve air quality, prevent soil erosion, and provide habitats for wildlife. Protecting existing green spaces, participating in community gardens, and supporting urban forestry initiatives help maintain ecological balance and enhance local biodiversity."
    },
    {
      "subheading": "Supporting Sustainable Products and Practices",
      "content": "Individuals influence markets through sustainable choices. Buying eco-friendly, biodegradable, or locally produced products reduces environmental impact. Supporting companies that practice ethical sourcing, renewable energy, and minimal packaging encourages sustainable business practices. Conscious consumerism promotes demand for environmentally responsible goods and reduces exploitation of natural resources."
    },
    {
      "subheading": "Advocacy and Community Engagement",
      "content": "Active participation in environmental advocacy and community initiatives amplifies individual impact. Joining environmental NGOs, participating in clean-up drives, organizing awareness campaigns, and educating peers about eco-friendly habits foster a culture of sustainability. Civic engagement, such as supporting policies and initiatives for conservation, strengthens collective action at local, national, and global levels."
    },
    {
      "subheading": "Reducing Carbon Footprint",
      "content": "Individuals can reduce their carbon footprint by adopting practices like using public transport or cycling instead of private vehicles, reducing meat consumption, and conserving energy at home. Awareness of personal lifestyle choices, travel habits, and consumption patterns allows individuals to make decisions that minimize greenhouse gas emissions, contributing to the global fight against climate change."
    },
    {
      "subheading": "Role of Education and Awareness",
      "content": "Education empowers individuals to make informed choices for environmental protection. Learning about sustainability, ecological balance, and climate change encourages proactive behavior. Sharing knowledge with family, friends, and the community fosters wider participation in eco-friendly practices. Awareness campaigns and workshops can motivate individuals to take concrete steps toward conservation."
    },
    {
      "subheading": "Conclusion",
      "content": "The role of individuals in environmental protection is indispensable. Through conscious daily actions, responsible consumption, community engagement, and advocacy, every person can contribute to preserving natural resources and combating environmental challenges. Collective efforts of informed and motivated individuals create a powerful impact, ensuring a sustainable and healthier planet for present and future generations."
    }
  ]
},
{
  "id": 9,
  "topic_name": "Plastic Pollution and Microplastics",
  "topic_description": "Understanding the causes, impacts, and solutions for plastic pollution and the emerging issue of microplastics in the environment.",
  "isCompleted": false,
  "category": "Pollution", "eco_coins": 200,
  "imgUrl": "https://woodly.com/wp-content/uploads/2021/10/shutterstock_1180604269-min-scaled.jpg",
  "para": [
    {
      "subheading": "Introduction to Plastic Pollution",
      "content": "Plastic pollution refers to the accumulation of plastic products in the environment, causing adverse effects on wildlife, ecosystems, and human health. Due to its durability and widespread use, plastic does not easily decompose, leading to long-term environmental contamination. Plastics are now found in oceans, rivers, soil, and even the air, posing a global ecological crisis that demands urgent attention."
    },
    {
      "subheading": "Sources of Plastic Pollution",
      "content": "Plastic pollution originates from multiple sources. Single-use plastics such as bags, bottles, straws, and packaging materials contribute heavily. Industrial discharge, fishing gear, and littering add to the problem. Microplastics, tiny plastic particles less than 5mm in size, originate from cosmetic products, synthetic clothing fibers, and breakdown of larger plastics. These pollutants reach marine and terrestrial environments, where they accumulate and persist."
    },
    {
      "subheading": "Impact on Marine and Terrestrial Life",
      "content": "Plastic pollution poses serious threats to both marine and terrestrial life. Animals often ingest plastics, mistaking them for food, leading to internal injuries, starvation, and death. Entanglement in plastic debris can cause restricted movement and suffocation. Microplastics enter food chains, accumulating toxins and affecting the health of predators, including humans. Ecosystem balance is disrupted as biodiversity declines and species struggle to survive in contaminated habitats."
    },
    {
      "subheading": "Human Health Implications",
      "content": "Humans are affected by plastic pollution indirectly through consumption of contaminated seafood, drinking water, and agricultural products. Microplastics carry toxic chemicals such as BPA and phthalates, which can interfere with hormone function, cause reproductive issues, and contribute to chronic diseases. Airborne microplastics also pose respiratory risks. Awareness of these health implications underscores the need for stricter plastic management and reduction strategies."
    },
    {
      "subheading": "Environmental and Economic Consequences",
      "content": "Plastic pollution negatively impacts ecosystems and the economy. Tourism suffers when beaches and natural sites are littered with plastic waste. Fisheries face reduced yields as fish populations decline due to ingestion of plastics. Clean-up costs burden governments and communities. Environmental degradation from plastic pollution also affects agriculture, soil quality, and freshwater resources, highlighting the widespread economic and ecological ramifications."
    },
    {
      "subheading": "Strategies to Reduce Plastic Pollution",
      "content": "Addressing plastic pollution requires multi-level action. Reducing single-use plastics, promoting reusable and biodegradable alternatives, and implementing recycling programs are effective measures. Governments can enforce bans, regulations, and incentives to minimize plastic production. Industries can adopt eco-friendly packaging and sustainable manufacturing practices. Community initiatives, awareness campaigns, and citizen participation enhance the effectiveness of these strategies."
    },
    {
      "subheading": "Managing Microplastics",
      "content": "Microplastics are particularly challenging to manage due to their small size and widespread presence. Strategies include improving wastewater treatment to filter microplastics, promoting the use of natural fibers over synthetic textiles, and reducing cosmetic products containing microbeads. Research and innovation in materials science are essential for developing biodegradable alternatives and methods to capture microplastics from aquatic and terrestrial environments."
    },
    {
      "subheading": "Role of Individuals and Communities",
      "content": "Individuals can significantly reduce plastic pollution through conscious choices. Using reusable bags, bottles, and containers, avoiding single-use plastics, participating in clean-up drives, and supporting eco-friendly brands contribute to pollution reduction. Communities can organize awareness campaigns, recycling drives, and local regulations to minimize plastic use and promote sustainable behavior, creating a collective impact on environmental conservation."
    },
    {
      "subheading": "Conclusion",
      "content": "Plastic pollution and microplastics are major environmental challenges with serious ecological, health, and economic consequences. Combating this issue requires collaboration among governments, industries, communities, and individuals. By adopting sustainable practices, reducing plastic consumption, and supporting innovative solutions, society can mitigate plastic pollution and protect the environment for future generations."
    }
  ]
},
{
  "id": 10,
  "topic_name": "Soil Erosion and Land Degradation",
  "topic_description": "Understanding the causes, effects, and preventive measures of soil erosion and land degradation.",
  "isCompleted": false,
  "category": "Soil & Land",
  "eco_coins": 200,
    "imgUrl": "https://media.licdn.com/dms/image/v2/D4D12AQGYx_dBIZGDOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694663775806?e=2147483647&v=beta&t=xR8gV_ateHUcU2VrsKMnU-TYwsU3hNpGp1M0fR71GkQ",
  "para": [
    {
      "subheading": "Introduction to Soil Erosion and Land Degradation",
      "content": "Soil erosion is the process by which the top layer of soil is removed by natural forces such as wind, water, and ice, or by human activities like deforestation and improper agricultural practices. Land degradation refers to the decline in land quality due to soil erosion, nutrient depletion, salinization, and deforestation. These processes reduce soil fertility, threaten agricultural productivity, and disrupt ecological balance, posing serious environmental and socio-economic challenges worldwide."
    },
    {
      "subheading": "Causes of Soil Erosion",
      "content": "Soil erosion can be caused by both natural and human factors. Natural causes include rainfall, river flow, wind, and glacier movement. Human-induced causes, however, are more severe and widespread. Deforestation removes protective vegetation cover, exposing soil to erosion. Overgrazing by livestock, unsustainable farming practices, mining, and construction activities accelerate soil loss. Improper irrigation methods and removal of natural barriers, like hedges and trees, also contribute to land degradation."
    },
    {
      "subheading": "Types of Soil Erosion",
      "content": "Soil erosion occurs in several forms, including water erosion, wind erosion, tillage erosion, and coastal erosion. Water erosion involves the washing away of soil by rainfall and surface runoff, creating rills, gullies, and landslides. Wind erosion is common in arid regions where loose soil particles are carried away by strong winds. Tillage erosion happens due to repetitive plowing, while coastal erosion occurs when waves and tides remove shoreline soil, affecting ecosystems and human settlements."
    },
    {
      "subheading": "Impact on Agriculture and Food Security",
      "content": "Soil erosion and land degradation directly affect agricultural productivity. Loss of fertile topsoil reduces nutrient availability, leading to lower crop yields. Degraded land often requires more fertilizers and irrigation, increasing production costs and environmental pollution. Long-term soil degradation threatens food security, particularly in regions dependent on rain-fed agriculture. Land degradation can also cause desertification, further limiting the land available for cultivation."
    },
    {
      "subheading": "Impact on Ecosystems and Biodiversity",
      "content": "Soil erosion disrupts ecosystems by altering natural habitats, reducing soil moisture, and causing sedimentation in rivers and wetlands. Aquatic ecosystems are affected by increased siltation, which reduces water quality and harms fish and other aquatic life. Terrestrial habitats may suffer from nutrient depletion, affecting plant growth and biodiversity. The loss of soil fertility and vegetation cover can trigger cascading effects throughout entire ecosystems, threatening ecological stability."
    },
    {
      "subheading": "Socio-Economic Consequences",
      "content": "Land degradation affects human communities by reducing agricultural productivity, leading to income loss, food insecurity, and increased poverty. Degraded lands often force farmers to migrate or abandon farming, resulting in social displacement. Infrastructure, such as roads and dams, may be damaged by erosion and landslides, increasing repair costs. Overall, soil erosion and land degradation pose both environmental and economic challenges that require urgent intervention."
    },
    {
      "subheading": "Preventive Measures and Soil Conservation",
      "content": "Preventive measures include both structural and biological methods. Structural measures, such as terracing, contour plowing, check dams, and retaining walls, reduce soil runoff and water erosion. Biological measures involve planting trees, shrubs, and grasses to stabilize soil, improve fertility, and maintain vegetation cover. Crop rotation, cover crops, reduced tillage, and organic farming enhance soil structure and prevent degradation. Community participation and sustainable land management are essential for long-term success."
    },
    {
      "subheading": "Role of Policy and Awareness",
      "content": "Government policies and awareness programs play a crucial role in combating soil erosion and land degradation. Regulations on deforestation, mining, and unsustainable farming protect soil resources. Educational campaigns, farmer training programs, and community workshops encourage adoption of soil conservation practices. Incentives for sustainable land management and penalties for damaging activities promote responsible behavior and long-term soil protection."
    },
    {
      "subheading": "Conclusion",
      "content": "Soil erosion and land degradation are significant environmental challenges with far-reaching impacts on agriculture, ecosystems, and human livelihoods. Preventive measures, sustainable practices, education, and policy support are essential to maintain soil health and ecological balance. Protecting soil and land resources ensures food security, biodiversity conservation, and sustainable development for current and future generations."
    }
  ]
}
];


async function insertLessons() {
  const { data, error } = await supabase
    .from('lessons')
    .insert(lessons)

  if (error) console.error(error)
  else console.log("Inserted:", data)
}

insertLessons();