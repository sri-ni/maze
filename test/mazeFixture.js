'use strict';

module.exports = {
  'matrix': [
    [
      {
        'cellNumber': 0,
        'hasMine': false,
        'isDeadEnd': true,
        'isEnd': true,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 1,
            'cellXY': [
              0,
              1
            ],
            'direction': 'right'
          }
        ]
      },
      {
        'cellNumber': 1,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 2,
            'cellXY': [
              0,
              2
            ],
            'direction': 'right'
          },
          {
            'cellNumber': 4,
            'cellXY': [
              1,
              1
            ],
            'direction': 'down'
          },
          {
            'cellNumber': 0,
            'cellXY': [
              0,
              0
            ],
            'direction': 'left'
          }
        ]
      },
      {
        'cellNumber': 2,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 5,
            'cellXY': [
              1,
              2
            ],
            'direction': 'down'
          },
          {
            'cellNumber': 1,
            'cellXY': [
              0,
              1
            ],
            'direction': 'left'
          }
        ]
      }
    ],
    [
      {
        'cellNumber': 3,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 4,
            'cellXY': [
              1,
              1
            ],
            'direction': 'right'
          },
          {
            'cellNumber': 6,
            'cellXY': [
              2,
              0
            ],
            'direction': 'down'
          }
        ]
      },
      {
        'cellNumber': 4,
        'hasMine': true,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 1,
            'cellXY': [
              0,
              1
            ],
            'direction': 'up'
          },
          {
            'cellNumber': 7,
            'cellXY': [
              2,
              1
            ],
            'direction': 'down'
          },
          {
            'cellNumber': 3,
            'cellXY': [
              1,
              0
            ],
            'direction': 'left'
          }
        ]
      },
      {
        'cellNumber': 5,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 2,
            'cellXY': [
              0,
              2
            ],
            'direction': 'up'
          },
          {
            'cellNumber': 8,
            'cellXY': [
              2,
              2
            ],
            'direction': 'down'
          }
        ]
      }
    ],
    [
      {
        'cellNumber': 6,
        'hasMine': false,
        'isDeadEnd': true,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 3,
            'cellXY': [
              1,
              0
            ],
            'direction': 'up'
          }
        ]
      },
      {
        'cellNumber': 7,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': true,
        'neighbors': [
          {
            'cellNumber': 4,
            'cellXY': [
              1,
              1
            ],
            'direction': 'up'
          },
          {
            'cellNumber': 8,
            'cellXY': [
              2,
              2
            ],
            'direction': 'right'
          }
        ]
      },
      {
        'cellNumber': 8,
        'hasMine': false,
        'isDeadEnd': false,
        'isEnd': false,
        'isStart': false,
        'neighbors': [
          {
            'cellNumber': 5,
            'cellXY': [
              1,
              2
            ],
            'direction': 'up'
          },
          {
            'cellNumber': 7,
            'cellXY': [
              2,
              1
            ],
            'direction': 'left'
          }
        ]
      }
    ]
  ],
  'startCell': [
    2,
    1
  ],
  'endCell': [
    0,
    0
  ],
  'openCells': [
    0,
    1,
    2,
    3,
    4,
    5,
    8
  ]
};
