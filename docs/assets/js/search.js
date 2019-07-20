var typedoc = typedoc || {}
typedoc.search = typedoc.search || {}
typedoc.search.data = {
  kinds: {
    '1': 'External module',
    '128': 'Class',
    '2048': 'Method',
    '65536': 'Type literal',
    '4194304': 'Type alias'
  },
  rows: [
    {
      id: 0,
      kind: 1,
      name: '"index"',
      url: 'modules/_index_.html',
      classes: 'tsd-kind-external-module'
    },
    {
      id: 1,
      kind: 128,
      name: 'Once',
      url: 'classes/_index_.once.html',
      classes: 'tsd-kind-class tsd-parent-kind-external-module',
      parent: '"index"'
    },
    {
      id: 2,
      kind: 2048,
      name: 'once',
      url: 'classes/_index_.once.html#once',
      classes: 'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
      parent: '"index".Once'
    },
    {
      id: 3,
      kind: 2048,
      name: 'syncOnce',
      url: 'classes/_index_.once.html#synconce',
      classes: 'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
      parent: '"index".Once'
    },
    {
      id: 4,
      kind: 2048,
      name: 'delete',
      url: 'classes/_index_.once.html#delete',
      classes: 'tsd-kind-method tsd-parent-kind-class',
      parent: '"index".Once'
    },
    {
      id: 5,
      kind: 4194304,
      name: 'func',
      url: 'modules/_index_.html#func',
      classes:
        'tsd-kind-type-alias tsd-parent-kind-external-module tsd-has-type-parameter',
      parent: '"index"'
    },
    {
      id: 6,
      kind: 65536,
      name: '__type',
      url: 'modules/_index_.html#func.__type',
      classes:
        'tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported',
      parent: '"index".func'
    },
    {
      id: 7,
      kind: 4194304,
      name: 'syncFunc',
      url: 'modules/_index_.html#syncfunc',
      classes:
        'tsd-kind-type-alias tsd-parent-kind-external-module tsd-has-type-parameter',
      parent: '"index"'
    },
    {
      id: 8,
      kind: 65536,
      name: '__type',
      url: 'modules/_index_.html#syncfunc.__type-1',
      classes:
        'tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported',
      parent: '"index".syncFunc'
    }
  ]
}
