// ============================================
// LIVE INTELLIGENCE DATA - IAS OFFICERS DASHBOARD
// Last Compiled: April 2025
// ============================================

const LIVE_DATA = {

// ====== CURRENT TOP BUREAUCRATS ======
currentPostings: [
  // Cabinet Level
  {name:"T.V. Somanathan", cadre:"Tamil Nadu", batch:1987, designation:"Cabinet Secretary", ministry:"Cabinet Secretariat", since:"Aug 2024", level:"Apex", prev:"Finance Secretary", note:"Highest-ranking civil servant in India. Coordinates all ministries."},
  {name:"Ajay Seth", cadre:"Karnataka", batch:1987, designation:"Secretary", ministry:"Dept of Economic Affairs, Ministry of Finance", since:"2024", level:"Secretary", prev:"DPIIT Secretary", note:"Controls forex reserves policy, external borrowings, capital markets regulation."},
  {name:"Tuhin Kanta Pandey", cadre:"Odisha", batch:1987, designation:"Finance Secretary & Revenue Secretary", ministry:"Dept of Revenue, Ministry of Finance", since:"2024", level:"Secretary", prev:"DIPAM Secretary", note:"Controls all tax policy - GST, Income Tax, Customs. Highest budget authority after FM."},
  {name:"Vivek Joshi", cadre:"Himachal Pradesh", batch:1989, designation:"Secretary", ministry:"Dept of Financial Services", since:"2024", level:"Secretary", prev:"Registrar General of India", note:"Oversees all banks, insurance companies, NBFCs. Key for financial sector policy."},
  {name:"Govind Mohan", cadre:"AGMUT", batch:1989, designation:"Home Secretary", ministry:"Ministry of Home Affairs", since:"2024", level:"Secretary", prev:"Culture Secretary", note:"Controls internal security, police, border management, disaster response. 2nd most powerful secretary."},
  {name:"Rajesh Kumar Singh", cadre:"Bihar", batch:1989, designation:"Secretary", ministry:"Dept of Expenditure", since:"2024", level:"Secretary", prev:"Power Secretary", note:"Controls government spending. Every ministry needs expenditure approval."},
  {name:"Aramane Giridhar", cadre:"Andhra Pradesh", batch:1988, designation:"Defence Secretary", ministry:"Ministry of Defence", since:"2022", level:"Secretary", prev:"Civil Aviation Secretary", note:"Manages 6.2 lakh crore defence budget. Key for defence procurement."},
  {name:"Vikram Misri", cadre:"N/A (IFS)", batch:1989, designation:"Foreign Secretary", ministry:"Ministry of External Affairs", since:"2024", level:"Secretary", prev:"Deputy NSA", note:"IFS officer. India's top diplomat."},
  {name:"S. Aparna", cadre:"Andhra Pradesh", batch:1988, designation:"Secretary", ministry:"Ministry of Commerce & Industry", since:"2024", level:"Secretary", prev:"Additional Secretary Commerce", note:"Controls trade policy, FTAs, export promotion. Key for business."},
  {name:"Apurva Chandra", cadre:"Maharashtra", batch:1988, designation:"Secretary", ministry:"Ministry of Health & Family Welfare", since:"2022", level:"Secretary", prev:"Labour Secretary", note:"Controls Ayushman Bharat, drug regulation, public health policy."},
  {name:"Sanjay Kumar", cadre:"Jharkhand", batch:1990, designation:"Secretary", ministry:"Ministry of Education", since:"2024", level:"Secretary", prev:"", note:"Oversees NEP implementation, university grants, school education."},
  {name:"Manoj Ahuja", cadre:"Odisha", batch:1990, designation:"Secretary", ministry:"Ministry of Agriculture", since:"2023", level:"Secretary", prev:"CBSE Chairman", note:"Controls PM-KISAN, crop insurance, MSP policy. Key for rural economy."},
  {name:"Shailesh Kumar Singh", cadre:"Rajasthan", batch:1990, designation:"Secretary", ministry:"Ministry of Rural Development", since:"2024", level:"Secretary", prev:"", note:"Controls MGNREGA (86K cr), PM Awas Yojana Gramin, rural roads."},
  {name:"Anurag Jain", cadre:"Rajasthan", batch:1989, designation:"Secretary", ministry:"DPIIT, Ministry of Commerce", since:"2022", level:"Secretary", prev:"", note:"Controls industrial policy, FDI rules, startup ecosystem, Make in India."},
  {name:"Pankaj Agarwal", cadre:"Uttar Pradesh", batch:1991, designation:"Secretary", ministry:"Ministry of Power", since:"2024", level:"Secretary", prev:"", note:"Controls power distribution, renewable energy push, electricity act reforms."},
  {name:"S. Krishnan", cadre:"Tamil Nadu", batch:1989, designation:"Secretary", ministry:"Ministry of Electronics & IT", since:"2023", level:"Secretary", prev:"", note:"Controls Digital India, IT Act, data protection, semiconductor policy."},
  {name:"Leena Nandan", cadre:"Uttar Pradesh", batch:1987, designation:"Secretary", ministry:"Ministry of Environment, Forest & Climate Change", since:"2022", level:"Secretary", prev:"Consumer Affairs Secretary", note:"Environmental clearances for all major projects. Critical chokepoint for infra."},
  {name:"Anurag Jain", cadre:"Madhya Pradesh", batch:1989, designation:"Secretary", ministry:"Ministry of Road Transport & Highways", since:"2024", level:"Secretary", prev:"", note:"Controls 2.7 lakh crore highway budget. Bharatmala, expressway projects."},
  {name:"B.V.R. Subrahmanyam", cadre:"Chhattisgarh", batch:1987, designation:"CEO", ministry:"NITI Aayog", since:"2023", level:"Secretary Equivalent", prev:"Commerce Secretary", note:"Government's top think tank. Policy formulation and state coordination."},

  // Chief Secretaries of Major States
  {name:"Manoj Kumar Singh", cadre:"Uttar Pradesh", batch:1988, designation:"Chief Secretary", ministry:"Government of Uttar Pradesh", since:"2024", level:"Chief Secretary", prev:"", note:"Most populous state. 25 crore population. Massive infrastructure spending."},
  {name:"Sujata Saunik", cadre:"Maharashtra", batch:1987, designation:"Chief Secretary", ministry:"Government of Maharashtra", since:"2024", level:"Chief Secretary", prev:"Home Secretary Maharashtra", note:"First woman CS of Maharashtra. Controls India's financial capital."},
  {name:"N. Muruganandam", cadre:"Tamil Nadu", batch:1989, designation:"Chief Secretary", ministry:"Government of Tamil Nadu", since:"2024", level:"Chief Secretary", prev:"", note:"IT/manufacturing hub state. Chennai-Bengaluru industrial corridor."},
  {name:"Shalini Rajneesh", cadre:"Karnataka", batch:1989, designation:"Chief Secretary", ministry:"Government of Karnataka", since:"2024", level:"Chief Secretary", prev:"Additional CS", note:"India's IT capital. Bengaluru tech ecosystem."},
  {name:"Raj Kumar", cadre:"Gujarat", batch:1988, designation:"Chief Secretary", ministry:"Government of Gujarat", since:"2024", level:"Chief Secretary", prev:"", note:"Industrial powerhouse. GIFT City, semiconductor fabs."},
  {name:"Sudhansh Pant", cadre:"Rajasthan", batch:1991, designation:"Chief Secretary", ministry:"Government of Rajasthan", since:"2024", level:"Chief Secretary", prev:"Health Secretary GoI", note:"Tourism, mining, renewable energy hub."},
  {name:"Amrit Abhijat", cadre:"Madhya Pradesh", batch:1991, designation:"Chief Secretary", ministry:"Government of Madhya Pradesh", since:"2024", level:"Chief Secretary", prev:"", note:"Large agrarian state. Smart Cities Mission focus."},
  {name:"Amitabh Jain", cadre:"Bihar", batch:1990, designation:"Chief Secretary", ministry:"Government of Bihar", since:"2024", level:"Chief Secretary", prev:"", note:"Rapid infrastructure growth. Special state status demands."},
  {name:"Manoj Pant", cadre:"West Bengal", batch:1988, designation:"Chief Secretary", ministry:"Government of West Bengal", since:"2024", level:"Chief Secretary", prev:"", note:"Eastern India gateway. Industrial revival push."},
],

// ====== MINISTRY BUDGETS (Union Budget 2025-26) ======
// Figures in Crores INR
budgets: [
  {ministry:"Ministry of Defence", budget:621940, change:"+9.5%", secretary:"Aramane Giridhar", keySchemes:["Defence Procurement","Border Infrastructure","Make in India Defence"], disbursable:"Capital: 1,80,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Road Transport & Highways", budget:278000, change:"+3.2%", secretary:"Anurag Jain", keySchemes:["Bharatmala Pariyojana","National Highway Development","Green Highway Policy"], disbursable:"Capital: 2,70,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Railways", budget:262200, change:"+5.0%", secretary:"Railway Board", keySchemes:["Vande Bharat Expansion","Station Redevelopment","Dedicated Freight Corridors"], disbursable:"Capital: 2,52,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Home Affairs", budget:222720, change:"+8.1%", secretary:"Govind Mohan", keySchemes:["Smart Border Management","NATGRID","Police Modernization","Disaster Response"], disbursable:"Revenue+Capital: 2,22,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Rural Development", budget:178481, change:"+4.5%", secretary:"Shailesh Kumar Singh", keySchemes:["MGNREGA","PM Awas Yojana-Gramin","PMGSY Rural Roads","DAY-NRLM"], disbursable:"Direct Transfer: 1,50,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Agriculture", budget:135580, change:"+6.7%", secretary:"Manoj Ahuja", keySchemes:["PM-KISAN","PM Fasal Bima Yojana","e-NAM","Soil Health Cards"], disbursable:"DBT: 60,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Education", budget:125638, change:"+7.2%", secretary:"Sanjay Kumar", keySchemes:["NEP Implementation","PM SHRI Schools","Samagra Shiksha","Higher Education"], disbursable:"Grants: 1,00,000 Cr", priority:"MEDIUM"},
  {ministry:"Ministry of Health & Family Welfare", budget:98741, change:"+12.0%", secretary:"Apurva Chandra", keySchemes:["Ayushman Bharat","PM-JAY","National Health Mission","AIIMS Expansion"], disbursable:"Insurance+Grants: 90,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Housing & Urban Affairs", budget:86000, change:"+10.1%", secretary:"MoHUA Secretary", keySchemes:["PM Awas Yojana-Urban","Smart Cities Mission","AMRUT 2.0","Metro Expansion"], disbursable:"Capital+Grants: 80,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Jal Shakti", budget:77000, change:"+15.0%", secretary:"Jal Shakti Secretary", keySchemes:["Jal Jeevan Mission","Swachh Bharat Mission 2.0","NMCG Namami Gange"], disbursable:"Mission: 70,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Finance (Revenue)", budget:68000, change:"+5.0%", secretary:"Tuhin Kanta Pandey", keySchemes:["GST Administration","Tax Administration Reform","Faceless Assessment"], disbursable:"Administrative: 68,000 Cr", priority:"CRITICAL"},
  {ministry:"Ministry of Commerce & Industry", budget:58000, change:"+8.0%", secretary:"S. Aparna / Anurag Jain", keySchemes:["PLI Schemes","Startup India","One District One Product","SEZ Policy"], disbursable:"Incentives: 50,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Electronics & IT", budget:21937, change:"+18.0%", secretary:"S. Krishnan", keySchemes:["Digital India","India Semiconductor Mission","BharatNet","Digital Public Infra"], disbursable:"Capital+Incentives: 20,000 Cr", priority:"HIGH"},
  {ministry:"Ministry of Power", budget:20502, change:"+7.5%", secretary:"Pankaj Agarwal", keySchemes:["Saubhagya","RDSS","Green Energy Corridor","PM-KUSUM"], disbursable:"Subsidy+Capital: 18,000 Cr", priority:"MEDIUM"},
  {ministry:"Ministry of Environment", budget:3418, change:"+4.0%", secretary:"Leena Nandan", keySchemes:["National Green Mission","Compensatory Afforestation","Climate Action Plan"], disbursable:"Grants: 3,000 Cr", priority:"LOW-MEDIUM"},
  {ministry:"NITI Aayog", budget:1658, change:"-2.0%", secretary:"B.V.R. Subrahmanyam", keySchemes:["Aspirational Districts","Atal Innovation Mission","SDG Monitoring"], disbursable:"Advisory Role", priority:"STRATEGIC"},
],

// ====== MAJOR GOVERNMENT SCHEMES ======
schemes: [
  {name:"PM-KISAN", budget:60000, ministry:"Agriculture", beneficiaries:"11 Cr farmers", desc:"Direct income support of Rs 6,000/year to farmer families", status:"Active - 16th installment", actionable:"Track disbursement by state/district. Key for agri-sector engagement."},
  {name:"MGNREGA", budget:86000, ministry:"Rural Development", beneficiaries:"15 Cr households", desc:"100-day guaranteed wage employment in rural areas", status:"Active", actionable:"Largest rural employment program. State-wise fund utilization varies hugely."},
  {name:"PM Awas Yojana (Urban+Rural)", budget:79000, ministry:"Housing & Rural Dev", beneficiaries:"4 Cr houses target", desc:"Affordable housing for all - urban and rural", status:"PMAY 2.0 launched", actionable:"Construction sector opportunity. Track state-wise sanction vs completion."},
  {name:"Ayushman Bharat PM-JAY", budget:7500, ministry:"Health", beneficiaries:"55 Cr people", desc:"Rs 5 lakh health insurance per family per year", status:"Active", actionable:"Hospital empanelment, health-tech integration opportunities."},
  {name:"Jal Jeevan Mission", budget:70000, ministry:"Jal Shakti", beneficiaries:"19 Cr households", desc:"Tap water connection to every rural household by 2024", status:"Extended", actionable:"Water infrastructure contracts. State-wise completion varies 40-100%."},
  {name:"Smart Cities Mission", budget:8000, ministry:"Housing & Urban Affairs", beneficiaries:"100 cities", desc:"Urban development with technology integration", status:"Completion phase", actionable:"Tech/infra vendor opportunities. SPV-based implementation."},
  {name:"Bharatmala Pariyojana", budget:107000, ministry:"Road Transport", beneficiaries:"Pan-India", desc:"34,800 km highway development program", status:"Phase 1 ongoing", actionable:"Massive construction contracts. Land acquisition is key bottleneck."},
  {name:"PLI Schemes (Production Linked Incentive)", budget:196000, ministry:"Commerce/DPIIT", beneficiaries:"14 sectors", desc:"Manufacturing incentives across electronics, pharma, auto, textiles etc.", status:"Active - disbursements accelerating", actionable:"Direct incentive opportunity for manufacturers. Apply sector-wise."},
  {name:"Digital India", budget:14903, ministry:"Electronics & IT", beneficiaries:"Pan-India", desc:"E-governance, digital infrastructure, digital literacy", status:"Active", actionable:"GovTech vendor opportunities. API integrations, cloud, cybersecurity."},
  {name:"PM Gati Shakti", budget:0, ministry:"Commerce/DPIIT", beneficiaries:"Pan-India", desc:"National Master Plan for multi-modal connectivity - coordination platform", status:"Active", actionable:"Not a spending scheme but a COORDINATION layer. All infra projects must align."},
  {name:"Startup India", budget:10000, ministry:"DPIIT", beneficiaries:"1 lakh+ startups", desc:"Fund of Funds, tax benefits, compliance simplification for startups", status:"Active", actionable:"SIDBI Fund of Funds. DPIIT recognition for tax benefits."},
  {name:"National Education Policy (NEP)", budget:45000, ministry:"Education", beneficiaries:"26 Cr students", desc:"Restructuring education from foundational to higher education", status:"Implementation phase", actionable:"EdTech opportunity. University grants, skill development."},
  {name:"Swachh Bharat Mission 2.0", budget:14000, ministry:"Jal Shakti + Urban", beneficiaries:"Pan-India", desc:"Sanitation, waste management, ODF Plus", status:"Active - Phase 2", actionable:"Waste management contracts. Urban local body partnerships."},
  {name:"PM Vishwakarma", budget:13000, ministry:"MSME", beneficiaries:"30 lakh artisans", desc:"Support for traditional artisans and craftspeople", status:"Launched 2023", actionable:"Skilling, credit support, market linkage for artisans."},
  {name:"India Semiconductor Mission", budget:76000, ministry:"Electronics & IT", beneficiaries:"Semiconductor ecosystem", desc:"Attract semiconductor fabs, ATMP, design companies to India", status:"Active - Tata, Micron plants approved", actionable:"Massive opportunity. Ecosystem vendors, equipment, chemicals, talent."},
],

// ====== NEWS FEED SOURCES (for live integration) ======
newsSources: [
  {name:"PIB (Press Information Bureau)", url:"https://pib.gov.in/", type:"Official", desc:"Government press releases, policy announcements"},
  {name:"DoPT Orders", url:"https://dopt.gov.in/", type:"Official", desc:"Transfer and posting orders for IAS/IPS/IFS"},
  {name:"The Hindu - Bureaucracy", url:"https://www.thehindu.com/", type:"News", desc:"Detailed bureaucratic coverage"},
  {name:"Economic Times - Policy", url:"https://economictimes.indiatimes.com/", type:"News", desc:"Policy and governance news"},
  {name:"LiveMint - Policy", url:"https://www.livemint.com/", type:"News", desc:"Financial policy, budget analysis"},
  {name:"Bureaucracy Today", url:"https://bureaucracytoday.com/", type:"Specialist", desc:"Dedicated IAS/bureaucracy news portal"},
],

// ====== DEPARTMENT-WISE DECISION AUTHORITY ======
decisionMap: [
  {area:"Environmental Clearance", authority:"MoEFCC Secretary + Expert Appraisal Committee", timeline:"120-180 days", budget:"Project-dependent", approach:"Apply via Parivesh portal. State-level for <50Cr projects."},
  {area:"Industrial License / FDI Approval", authority:"DPIIT Secretary + FIPB replacement (sectoral)", timeline:"60-90 days", budget:"Investment-dependent", approach:"Automatic route for most sectors. Government route via concerned ministry."},
  {area:"Land Acquisition (Central)", authority:"District Collector + State Revenue Secretary", timeline:"6-24 months", budget:"Market value + solatium", approach:"LARR Act 2013 process. Social Impact Assessment mandatory."},
  {area:"Government Contract (>50 Cr)", authority:"Secretary of concerned Ministry + Finance Adviser", timeline:"90-180 days", budget:"As per GFR/GEM", approach:"GeM portal mandatory for goods. Open tender for works above threshold."},
  {area:"Tax Dispute Resolution", authority:"CBDT/CBIC Chairman + Advance Ruling Authority", timeline:"90-365 days", budget:"Disputed amount", approach:"Vivad se Vishwas for pending disputes. DRC for new disputes."},
  {area:"Startup Recognition & Benefits", authority:"DPIIT Secretary", timeline:"30 days", budget:"Tax exemption + Fund access", approach:"Apply on Startup India portal. Inter-Ministerial Board for tax exemption."},
  {area:"Export Incentives (RODTEP/RoSCTL)", authority:"DGFT + Commerce Secretary", timeline:"Quarterly", budget:"Up to 4% of FOB", approach:"File through ICEGATE. Automatic for registered exporters."},
  {area:"Highway/Road Project Approval", authority:"MoRTH Secretary + PIB/EFC", timeline:"6-12 months", budget:">100 Cr needs PIB clearance", approach:"DPR through NHAI. NH Authority for execution."},
  {area:"Power/Energy Project Clearance", authority:"Power Secretary + CEA + State DISCOM", timeline:"6-18 months", budget:"Project-dependent", approach:"CEA techno-economic clearance. PPA with DISCOM."},
  {area:"Smart City Project Approval", authority:"Smart City CEO (IAS) + SPV Board", timeline:"30-90 days", budget:"Up to 500 Cr per city", approach:"Through city-level SPV. PPP model preferred."},
  {area:"PM Gati Shakti Alignment", authority:"DPIIT Secretary + Empowered Group", timeline:"Ongoing", budget:"Cross-ministerial", approach:"All infra projects must show Gati Shakti alignment. GIS-based approval."},
  {area:"GST Policy Change", authority:"GST Council (FM + all state FMs)", timeline:"Council meetings quarterly", budget:"Revenue impact assessed", approach:"Industry representation through associations. Pre-budget memoranda."},
],

// ====== STATE-WISE KEY METRICS ======
stateMetrics: {
  "Uttar Pradesh": {gdp:"22.6 lakh Cr", population:"25 Cr", centralFunds:"2.8 lakh Cr", keyProjects:["Jewar Airport","Bundelkhand Expressway","Defense Corridor"], topSector:"Agriculture, MSME, IT"},
  "Maharashtra": {gdp:"35.6 lakh Cr", population:"13 Cr", centralFunds:"1.8 lakh Cr", keyProjects:["Mumbai Trans-Harbour Link","MTHL","Navi Mumbai Airport","Bullet Train"], topSector:"Finance, IT, Manufacturing"},
  "Tamil Nadu": {gdp:"24.8 lakh Cr", population:"8 Cr", centralFunds:"1.2 lakh Cr", keyProjects:["Chennai Metro Phase 2","Parandur Airport","TIDCO Smart Cities"], topSector:"Auto, IT, Electronics"},
  "Karnataka": {gdp:"22.4 lakh Cr", population:"7 Cr", centralFunds:"1.1 lakh Cr", keyProjects:["Bengaluru Suburban Rail","KIAL Terminal 2","Semiconductor Park"], topSector:"IT, Biotech, Aerospace"},
  "Gujarat": {gdp:"22.1 lakh Cr", population:"7 Cr", centralFunds:"1.0 lakh Cr", keyProjects:["GIFT IFSC","Dholera SIR","Semiconductor Fab","SAUNI Project"], topSector:"Chemicals, Pharma, Ports"},
  "Rajasthan": {gdp:"13.8 lakh Cr", population:"8 Cr", centralFunds:"1.5 lakh Cr", keyProjects:["Barmer Refinery","Solar Parks","Delhi-Mumbai Expressway"], topSector:"Tourism, Mining, Renewable Energy"},
  "Madhya Pradesh": {gdp:"12.2 lakh Cr", population:"8.5 Cr", centralFunds:"1.6 lakh Cr", keyProjects:["Smart Cities (7)","Industrial Corridors","Ken-Betwa Link"], topSector:"Agriculture, Mining, Tourism"},
  "West Bengal": {gdp:"16.1 lakh Cr", population:"10 Cr", centralFunds:"1.4 lakh Cr", keyProjects:["Tajpur Port","Metro Expansion","IT Hubs Rajarhat"], topSector:"MSME, IT, Jute, Steel"},
  "Bihar": {gdp:"7.5 lakh Cr", population:"13 Cr", centralFunds:"2.0 lakh Cr", keyProjects:["Patna Metro","Bridge Projects","Industrial Areas"], topSector:"Agriculture, Construction, Education"},
  "Andhra Pradesh": {gdp:"14.2 lakh Cr", population:"5.3 Cr", centralFunds:"1.3 lakh Cr", keyProjects:["Amaravati Capital","Vizag-Chennai Industrial Corridor","Pharma City"], topSector:"Pharma, Agriculture, IT"},
  "Telangana": {gdp:"14.5 lakh Cr", population:"4 Cr", centralFunds:"0.7 lakh Cr", keyProjects:["Hyderabad Metro Phase 2","Pharma City","IT Corridor"], topSector:"IT, Pharma, Defence"},
  "Kerala": {gdp:"10.8 lakh Cr", population:"3.6 Cr", centralFunds:"0.6 lakh Cr", keyProjects:["SilverLine Rail","Kochi Metro Phase 2","Vizhinjam Port"], topSector:"Tourism, IT, Remittances"},
}
};
