export enum ProjectTags {
  OpenSource,
  ClosedSource,
  Flutter,
  Rust,
  Web,
  Colaboration,
}

export interface Project {
  title: string
  description: string
  skills: string[]
  linkMore?: string
  linkCode?: string
  tags: ProjectTags[]
}

export const projects: Project[] = [
  {
    title: 'Polybius',
    description:
      'A blazing-fast smart password generator built with Rust, featuring a sleek and secure website also developed in Rust. Ideal for creating strong, unique passwords effortlessly.',
    skills: ['Rust', 'HTML', 'TailwindCSS'],
    linkMore: 'https://2-5-perceivers.github.io/polybius/',
    linkCode: 'https://github.com/2-5-perceivers/polybius',

    tags: [ProjectTags.OpenSource, ProjectTags.Rust, ProjectTags.Web],
  },
  {
    title: 'My Portfolio',
    description:
      "The website you're currently viewing, crafted with Vue. It showcases meticulous attention to design and accessibility, ensuring a seamless and inclusive user experience.",
    skills: ['Vue', 'HTML', 'TailwindCSS'],
    linkMore: '/',
    linkCode: 'https://github.com/raresvanca/raresvanca.github.io',
    tags: [ProjectTags.OpenSource, ProjectTags.Web],
  },
  {
    title: '2-5-perceivers.github.io',
    description:
      'The official website for my organization, designed to showcase the technologies we use. Built with Vue.js and styled with Tailwind CSS for a modern and responsive user experience.',
    skills: ['Vue', 'HTML', 'TailwindCSS'],
    linkMore: 'https://2-5-perceivers.github.io/',
    linkCode: 'https://github.com/2-5-perceivers/2-5-perceivers.github.io',

    tags: [ProjectTags.OpenSource, ProjectTags.Web],
  },
  {
    title: 'BeTalk',
    description:
      'A real-time chat application utilizing sockets. It features various client and server implementations, developed with Flutter for the frontend, and Rust and Kotlin for the backend.',
    skills: ['Flutter', 'Rust', 'Python', 'Kotlin', 'Dart', 'Networking'],
    linkCode: 'https://github.com/2-5-perceivers/betalk',
    tags: [ProjectTags.OpenSource, ProjectTags.Flutter, ProjectTags.Colaboration],
  },
  {
    title: 'flutter-master-detail-flow',
    description:
      'A Flutter package that eases the creation of modern master-detail flows. With 6 GitHub stars and a growing number of likes and downloads on pub.dev, it simplifies building responsive and intuitive user interfaces.',
    skills: ['Flutter', 'Dart', 'GitHub'],
    linkMore: 'https://pub.dev/packages/master_detail_flow',
    linkCode: 'https://github.com/2-5-perceivers/flutter-master-detail-flow',

    tags: [ProjectTags.OpenSource, ProjectTags.Flutter, ProjectTags.Colaboration],
  },
  {
    title: 'share_plus_dialog',
    description:
      'A Flutter package that extends the functionality of share_plus by providing custom sharing dialogs when share_plus is unavailable. It ensures seamless sharing capabilities across different platforms.',
    skills: ['Flutter', 'Dart'],
    linkMore: 'https://pub.dev/packages/share_plus_dialog',
    linkCode: 'https://github.com/2-5-perceivers/share_plus_dialog',

    tags: [ProjectTags.OpenSource, ProjectTags.Flutter],
  },
  {
    title: 'end-padding',
    description:
      'A minimalistic Flutter package designed to add padding at the bottom of lists. This ensures that the final items remain visible and accessible, even when system navigation bars or floating action buttons are present.',
    skills: ['Flutter', 'Dart'],
    linkMore: 'https://pub.dev/packages/end_padding',
    linkCode: 'https://github.com/2-5-perceivers/end-padding',

    tags: [ProjectTags.OpenSource, ProjectTags.Flutter],
  },
  {
    title: 'expand',
    description:
      'A Flutter package for creating sleek and responsive expandable widgets with minimal code, ensuring quick and efficient development.',
    skills: ['Flutter', 'Dart'],
    linkMore: 'https://pub.dev/packages/expand',
    linkCode: 'https://github.com/2-5-perceivers/expand',
    tags: [ProjectTags.OpenSource, ProjectTags.Flutter],
  },
  {
    title: 'Warpinator Android',
    description:
      'An Android app that allows users to share files across devices on the same network. It is a port of the Linux Mint application of the same name. I worked on the UI of the app.',
    skills: ['Android', 'Kotlin', 'Java', 'GitHub'],
    linkCode: 'https://github.com/slowscript/warpinator-android',
    tags: [ProjectTags.OpenSource, ProjectTags.Colaboration],
  },
  {
    title: 'Qube2Space',
    description:
      'A contest focused on building small satellites at UPB, where I successfully designed and constructed one powered by a microcontroller with a custom PCB.',
    skills: ['C++', 'Electronics', 'Microcontrollers', 'Embedded Development'],
    tags: [ProjectTags.ClosedSource],
  },
  {
    title: 'godot-toasts',
    description:
      'My first open-source repository, this Godot plugin creates Android-like toast notifications, providing simple and unobtrusive user feedback.',
    skills: ['Godot'],
    linkCode: 'https://github.com/raresvanca/godot-toasts',
    tags: [ProjectTags.OpenSource],
  },
  {
    title: 'Flappy',
    description:
      'A reinterpretation of the classic Flappy Bird game, developed in Godot. It features a sleek design and smooth gameplay, providing an engaging and challenging experience.',
    skills: ['Godot', 'Game Development'],
    linkMore: 'https://adorkw.itch.io/flappy',
    tags: [ProjectTags.ClosedSource],
  },
  {
    title: 'Rust Hangman',
    description:
      'A project for school that I overcomplicated by implementing a full-fledged Hangman game in Rust and Raylib',
    skills: ['Rust', 'Raylib', 'Game Development'],
    linkCode: 'https://github.com/2-5-perceivers/hangman',
    tags: [ProjectTags.OpenSource, ProjectTags.Rust],
  },
  {
    title: 'Petrichor',
    description: 'A backgrounds app for Android that I developed in Flutter as freelance work',
    skills: ['Flutter', 'Android'],
    linkMore: 'https://play.google.com/store/apps/details?id=com.petrichor',
    tags: [ProjectTags.ClosedSource],
  },
]
