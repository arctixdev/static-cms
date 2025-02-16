import type { LocalePhrasesRoot } from '../types';

const uk: LocalePhrasesRoot = {
  auth: {
    login: undefined, // English translation: 'Login'
    loggingIn: undefined, // English translation: 'Logging in...'
    loginWithNetlifyIdentity: undefined, // English translation: 'Login with Netlify Identity'
    loginWithBitbucket: undefined, // English translation: 'Login with Bitbucket'
    loginWithGitHub: undefined, // English translation: 'Login with GitHub'
    loginWithGitLab: undefined, // English translation: 'Login with GitLab'
    loginWithGitea: undefined, // English translation: 'Login with Gitea'
    errors: {
      email: undefined, // English translation: 'Make sure to enter your email.'
      password: undefined, // English translation: 'Please enter your password.'
      authTitle: undefined, // English translation: 'Error logging in'
      authBody: '%{details}',
      netlifyIdentityNotFound: undefined, // English translation: 'Netlify Identity plugin not found'
      identitySettings: undefined, // English translation: 'Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.'
    },
  },
  app: {
    header: {
      content: 'Зміст',
      media: 'Медіа',
      quickAdd: 'Додати',
    },
    app: {
      errorHeader: 'Помилка завантаження конфігурації',
      configErrors: 'Помилка конфігурації',
      configNotFound: undefined, // English translation: 'Config not found'
      checkConfigYml: 'Перевірте config.yml файл.',
      loadingConfig: 'Завантаження конфігурації...',
      waitingBackend: 'Очікування серверу...',
    },
    notFoundPage: {
      header: 'Сторінку не знайдено ',
    },
  },
  collection: {
    sidebar: {
      collections: 'Колекції',
      allCollections: undefined, // English translation: 'All Collections'
      searchAll: 'Пошук',
      searchIn: undefined, // English translation: 'Search in'
    },
    collectionTop: {
      sortBy: undefined, // English translation: 'Sort by'
      viewAs: 'Змінити вигляд',
      newButton: 'Створити %{collectionLabel}',
      ascending: undefined, // English translation: 'Ascending'
      descending: undefined, // English translation: 'Descending'
      searchResults: undefined, // English translation: 'Search Results for "%{searchTerm}"'
      searchResultsInCollection: undefined, // English translation: 'Search Results for "%{searchTerm}" in %{collection}'
      filterBy: undefined, // English translation: 'Filter by'
      groupBy: undefined, // English translation: 'Group by'
    },
    entries: {
      loadingEntries: 'Завантаження записів',
      cachingEntries: 'Кешування записів',
      longerLoading: 'Це може зайняти декілька хвилинок',
      noEntries: undefined, // English translation: 'No Entries'
    },
    groups: {
      other: undefined, // English translation: 'Other'
      negateLabel: undefined, // English translation: 'Not %{label}'
    },
    table: {
      summary: undefined, // English translation: 'Summary'
      collection: undefined, // English translation: 'Collection'
    },
    defaultFields: {
      author: {
        label: undefined, // English translation: 'Author'
      },
      updatedOn: {
        label: undefined, // English translation: 'Updated On'
      },
    },
    notFound: undefined, // English translation: 'Collection not found'
  },
  editor: {
    editorControl: {
      field: {
        optional: 'необов’язково',
      },
    },
    editorControlPane: {
      widget: {
        required: "%{fieldLabel} є обов'язковим.",
        regexPattern: '%{fieldLabel} не задовільняє умові: %{pattern}.',
        processing: 'обробляється %{fieldLabel}.',
        range: 'значення %{fieldLabel} повинне бути від %{minValue} до %{maxValue}.',
        min: 'значення %{fieldLabel} має бути від %{minValue}.',
        max: 'значення %{fieldLabel} має бути %{maxValue} та менше.',
        rangeCount: undefined, // English translation: '%{fieldLabel} must have between %{minCount} and %{maxCount} item(s).'
        rangeCountExact: undefined, // English translation: '%{fieldLabel} must have exactly %{count} item(s).'
        rangeMin: undefined, // English translation: '%{fieldLabel} must have at least %{minCount} item(s).'
        rangeMax: undefined, // English translation: '%{fieldLabel} must have %{maxCount} or less item(s).'
        invalidPath: undefined, // English translation: ''%{path}' is not a valid path.'
        pathExists: undefined, // English translation: 'Path '%{path}' already exists.'
        invalidColor: undefined, // English translation: 'Color '%{color}' is invalid.'
        invalidHexCode: undefined, // English translation: 'Hex codes must start with a # sign.'
      },
      i18n: {
        writingInLocale: undefined, // English translation: 'Writing in %{locale}'
      },
    },
    editor: {
      onLeavePage: 'Ви дійсно бажаєте залишити сторінку?',
      onDeleteWithUnsavedChangesTitle: undefined, // English translation: 'Delete this published entry?'
      onDeleteWithUnsavedChangesBody:
        'Ви дійсно бажаєте видалити опублікований запис, як і всі незбережені зміни під час поточної сесії?',
      onDeletePublishedEntryTitle: undefined, // English translation: 'Delete this published entry?'
      onDeletePublishedEntryBody: 'Ви дійсно бажаєте видалити опублікований запис?',
      loadingEntry: 'Завантаження...',
    },
    editorInterface: {
      sideBySideI18n: undefined, // English translation: 'I18n Side by Side'
      preview: undefined, // English translation: 'Preview'
      toggleI18n: undefined, // English translation: 'Toggle i18n'
      togglePreview: undefined, // English translation: 'Toggle preview'
      toggleScrollSync: undefined, // English translation: 'Sync scrolling'
    },
    editorToolbar: {
      publish: 'Опублікувати',
      published: 'Опубліковано',
      duplicate: undefined, // English translation: 'Duplicate'
      publishAndCreateNew: 'Опублікувати і створити нову',
      publishAndDuplicate: undefined, // English translation: 'Publish and duplicate'
      deleteEntry: 'Видалити',
      publishNow: 'Опублікувати',
      discardChanges: undefined, // English translation: 'Discard changes'
      discardChangesTitle: undefined, // English translation: 'Discard changes'
      discardChangesBody: undefined, // English translation: 'Are you sure you want to discard the unsaved changed?'
    },
    editorWidgets: {
      markdown: {
        bold: undefined, // English translation: 'Bold'
        italic: undefined, // English translation: 'Italic'
        code: undefined, // English translation: 'Code'
        link: undefined, // English translation: 'Link'
        linkPrompt: undefined, // English translation: 'Enter the URL of the link'
        headings: undefined, // English translation: 'Headings'
        quote: undefined, // English translation: 'Quote'
        bulletedList: undefined, // English translation: 'Bulleted List'
        numberedList: undefined, // English translation: 'Numbered List'
        addComponent: undefined, // English translation: 'Add Component'
        richText: undefined, // English translation: 'Rich Text'
        markdown: undefined, // English translation: 'Markdown'
        type: undefined, // English translation: 'Type...'
      },
      image: {
        choose: 'Виберіть зображення',
        chooseMultiple: undefined, // English translation: 'Choose images'
        chooseUrl: undefined, // English translation: 'Insert from URL'
        replaceUrl: undefined, // English translation: 'Replace with URL'
        promptUrl: undefined, // English translation: 'Enter the URL of the image'
        chooseDifferent: 'Виберіть інше зображення',
        addMore: undefined, // English translation: 'Add more images'
        remove: 'Видалити зображення',
        removeAll: undefined, // English translation: 'Remove all images'
      },
      file: {
        choose: 'Виберіть файл',
        chooseUrl: undefined, // English translation: 'Insert from URL'
        chooseMultiple: undefined, // English translation: 'Choose files'
        replaceUrl: undefined, // English translation: 'Replace with URL'
        promptUrl: undefined, // English translation: 'Enter the URL of the file'
        chooseDifferent: 'Виберіть інший файл',
        addMore: undefined, // English translation: 'Add more files'
        remove: 'Видалити файл',
        removeAll: undefined, // English translation: 'Remove all files'
      },
      folder: {
        choose: undefined, // English translation: 'Choose a folder'
        chooseUrl: undefined, // English translation: 'Insert folder path'
        chooseMultiple: undefined, // English translation: 'Choose folders'
        replaceUrl: undefined, // English translation: 'Replace with path'
        promptUrl: undefined, // English translation: 'Enter path of the folder'
        chooseDifferent: undefined, // English translation: 'Choose different folder'
        addMore: undefined, // English translation: 'Add more folders'
        remove: undefined, // English translation: 'Remove folder'
        removeAll: undefined, // English translation: 'Remove all folders'
      },
      unknownControl: {
        noControl: "Відсутній модуль для '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "Відсутній перегляд для '%{widget}'.",
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6',
      },
      datetime: {
        now: undefined, // English translation: 'Now'
        invalidDateTitle: undefined, // English translation: 'Invalid date'
        invalidDateBody: undefined, // English translation: 'The date you entered is invalid.'
      },
      list: {
        add: undefined, // English translation: 'Add %{item}'
        addType: undefined, // English translation: 'Add %{item}'
        noValue: undefined, // English translation: 'No value'
      },
      keyvalue: {
        key: undefined, // English translation: 'Key'
        value: undefined, // English translation: 'Value'
        uniqueKeys: undefined, // English translation: '%{keyLabel} must be unique'
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'В роботі',
      copy: undefined, // English translation: 'Copy'
      copyUrl: undefined, // English translation: 'Copy URL'
      copyPath: undefined, // English translation: 'Copy Path'
      copyName: undefined, // English translation: 'Copy Name'
      copied: undefined, // English translation: 'Copied'
    },
    mediaLibrary: {
      onDeleteTitle: undefined, // English translation: 'Delete selected media?'
      onDeleteBody: 'Ви дійсно бажаєте видалити обрані матеріали?',
      fileTooLargeTitle: undefined, // English translation: 'File too large'
      fileTooLargeBody: undefined, // English translation: 'File too large.\nConfigured to not allow files greater than %{size} kB.'
      alreadyExistsTitle: undefined, // English translation: 'File already exists'
      alreadyExistsBody: undefined, // English translation: '%{filename} already exists. Do you want to replace it?'
    },
    mediaLibraryModal: {
      loading: 'Завантаження...',
      noResults: 'Результати відсутні.',
      noAssetsFound: 'Матеріали відсутні.',
      noImagesFound: 'Зображення відсутні.',
      images: 'Зображення',
      mediaAssets: 'Медіа матеріали',
      search: 'Пошук...',
      uploading: 'Завантаження...',
      upload: 'Завантажити',
      download: undefined, // English translation: 'Download'
      deleting: 'Видалення...',
      deleteSelected: 'Видалити обране',
      chooseSelected: 'Додати обране',
      dropImages: undefined, // English translation: 'Drop images to upload'
      dropFiles: undefined, // English translation: 'Drop files to upload'
    },
    folderSupport: {
      newFolder: undefined, // English translation: 'New folder'
      createNewFolder: undefined, // English translation: 'Create new folder'
      enterFolderName: undefined, // English translation: 'Enter folder name...'
      home: undefined, // English translation: 'Home'
      up: undefined, // English translation: 'Up'
      upToFolder: undefined, // English translation: 'Up to %{folder}'
    },
  },
  ui: {
    common: {
      yes: undefined, // English translation: 'Yes'
      no: undefined, // English translation: 'No'
      okay: undefined, // English translation: 'OK'
    },
    default: {
      goBackToSite: undefined, // English translation: 'Go back to site'
    },
    localBackup: {
      hasLocalBackup: undefined, // English translation: 'Has local backup'
    },
    errorBoundary: {
      title: 'Помилка',
      details: 'Відбулась помилка - будь ласка ',
      reportIt: 'надішліть нам деталі.',
      detailsHeading: 'Деталі',
      privacyWarning: undefined, // English translation: 'Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.'
      recoveredEntry: {
        heading: 'Відновлено документ',
        warning: 'Будь ласка, збережіть це десь перед тим як піти!',
        copyButtonLabel: 'Скопіювати в буфер',
      },
    },
    settingsDropdown: {
      darkMode: undefined, // English translation: 'Dark Mode'
      logOut: 'Вихід',
    },
    toast: {
      onFailToLoadEntries: 'Помилка завантаження: %{details}',
      onFailToPersist: 'Помилка перезапису: %{details}',
      onFailToPersistMedia: undefined, // English translation: 'Failed to persist media: %{details}'
      onFailToDelete: 'Помилка видалення: %{details}',
      onFailToDeleteMedia: undefined, // English translation: 'Failed to delete media: %{details}'
      onFailToUpdateStatus: 'Помилка оновлення статусу: %{details}',
      missingRequiredField:
        "Йой, здається пропущено обов'язкове поле. Будь ласка, заповніть перед збереженням.",
      entrySaved: 'Збережено',
      entryPublished: 'Опубліковано',
      onFailToPublishEntry: 'Помилка публікації: %{details}',
      entryUpdated: 'Статус оновлено',
      onFailToAuth: '%{details}',
      onLoggedOut: undefined, // English translation: 'You have been logged out, please back up any data and login again'
      onBackendDown: undefined, // English translation: 'The backend service is experiencing an outage. See %{details} for more information'
    },
  },
};

export default uk;
