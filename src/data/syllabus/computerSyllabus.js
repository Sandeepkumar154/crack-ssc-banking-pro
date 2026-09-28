// Comprehensive Computer Knowledge Module (CKM) Syllabus
// Mandatory Qualifying in SSC CGL Tier 2 (20Q / 60 Marks) and Banking Exams

export const COMPUTER_SYLLABUS = {
  subjectId: 'computer',
  subjectName: 'Computer Knowledge Module (CKM)',
  totalTopics: 5,
  totalTypesCataloged: 15,
  topics: [
    {
      id: 'hardware_cpu_memory',
      name: 'CPU Architecture & Memory Hierarchy',
      category: 'Hardware',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 2,
      overview: 'CPU components (ALU, CU, Registers) and the complete speed hierarchy of storage.',
      types: [
        {
          typeNumber: 1,
          title: 'Speed & Proximity Memory Hierarchy',
          identificationBlueprint: 'Arranging storage in order of fastest access time or lowest capacity.',
          standardMethod: 'Confusing RAM with Cache.',
          proShortcut: 'Fastest to Slowest:\nRegisters (Inside CPU) > L1 Cache > L2 Cache > L3 Cache > SRAM > DRAM (Main Memory RAM) > NVMe SSD > SATA HDD > Optical Disc > Magnetic Tape.',
          workedExample: {
            question: 'Which of the following memories has the lowest access time (fastest)?',
            options: ['CPU Registers', 'L1 Cache', 'SRAM', 'DRAM'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Registers are located directly on the processor core circuitry and operate at CPU clock speed.',
            examinerTrap: 'Selecting Cache when Registers are present in options.'
          }
        }
      ]
    },

    {
      id: 'ms_office_excel_word',
      name: 'MS Excel Formulas & Word Keyboard Shortcuts',
      category: 'Software & Office',
      highYieldRating: 5,
      avgQuestionsPerPaper: '5 to 6 Questions in Tier 2',
      typesCount: 2,
      overview: 'Absolute referencing ($A$1), VLOOKUP parameters, and essential keyboard shortcuts.',
      types: [
        {
          typeNumber: 1,
          title: 'Excel Cell Referencing ($ Sign Rule) & Formulas',
          identificationBlueprint: 'What happens when formula $A$1 or A$1 is copied across columns or rows?',
          standardMethod: 'Confusing column and row locks.',
          proShortcut: 'The Dollar Sign ($) Anchor:\n- $ before letter ($A1): Column A is LOCKED (fixed); row changes when dragged.\n- $ before number (A$1): Row 1 is LOCKED (fixed); column changes when dragged.\n- $ before both ($A$1): Absolute Reference; cell never changes anywhere!',
          workedExample: {
            question: 'In MS Excel, what is the shortcut key to toggle between Relative, Absolute, and Mixed cell references in a formula?',
            options: ['F4', 'F2', 'F7', 'F12'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'F4 toggles cell references ($A$1 -> A$1 -> $A1 -> A1). F2 is edit cell, F7 is spell check, F12 is Save As.',
            examinerTrap: 'Confusing F4 with F2.'
          }
        }
      ]
    },

    {
      id: 'networking_osi_protocols',
      name: 'Internet Protocols & The 7-Layer OSI Model',
      category: 'Networking',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 2,
      overview: 'The 7 OSI layers from bottom to top and standard TCP/IP port numbers.',
      types: [
        {
          typeNumber: 1,
          title: 'The 7 OSI Layers Mnemonic ("All People Seem To Need Data Processing")',
          identificationBlueprint: 'Which layer of OSI model handles routing, framing, or end-to-end delivery?',
          standardMethod: 'Mixing up layer numbers.',
          proShortcut: 'Top to Bottom (Layer 7 to 1):\n- Layer 7: Application (HTTP, SMTP, FTP, DNS)\n- Layer 6: Presentation (Data encryption, compression, JPEG/MPEG)\n- Layer 5: Session (Dialog control, tokens)\n- Layer 4: Transport (TCP, UDP - Port numbers, End-to-end delivery)\n- Layer 3: Network (IP address, Routers, Packets)\n- Layer 2: Data Link (MAC address, Switches, Frames, Error detection)\n- Layer 1: Physical (Bits, Cables, Hubs, Repeaters).\nMnemonic: "All People Seem To Need Data Processing" (7 to 1).',
          workedExample: {
            question: 'Routers operate at which layer of the OSI model?',
            options: ['Network Layer (Layer 3)', 'Data Link Layer (Layer 2)', 'Transport Layer (Layer 4)', 'Physical Layer (Layer 1)'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Routers examine IP addresses (Layer 3 - Network). Switches examine MAC addresses (Layer 2 - Data Link).',
            examinerTrap: 'Confusing Switches (Layer 2) with Routers (Layer 3).'
          }
        }
      ]
    },

    {
      id: 'cyber_security_threats',
      name: 'Cyber Security (Malware, Phishing & Ransomware)',
      category: 'Cyber Security',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions in Tier 2',
      typesCount: 2,
      overview: 'Distinguishing Trojans, Worms, Viruses, Ransomware, and Phishing attacks.',
      types: [
        {
          typeNumber: 1,
          title: 'Virus vs Worm vs Trojan Horse Distinction',
          identificationBlueprint: 'Malware that self-replicates without human intervention vs malware disguised as useful software.',
          standardMethod: 'Calling every malware a "virus".',
          proShortcut: 'The Threat Triad:\n- Worm: Self-Replicating and spreads over network WITHOUT any human action or host file!\n- Virus: Requires a HOST file and human execution (e.g. opening infected .exe file) to propagate.\n- Trojan Horse: Disguises itself as legitimate/useful software (e.g. fake game or cleaner) to grant backdoor access.\n- Ransomware: Encrypts user files and demands payment (usually cryptocurrency) for decryption key (e.g. WannaCry).',
          workedExample: {
            question: 'Which type of malicious software self-replicates across computer networks automatically WITHOUT requiring any host program or user action?',
            options: ['Worm', 'Trojan Horse', 'Virus', 'Spyware'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Worms spread autonomously without human intervention.',
            examinerTrap: 'Selecting Virus (viruses need human action and a host file).'
          }
        }
      ]
    }
  ]
};
