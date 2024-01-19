# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |graph LR
A[Sustainable Farms Inc. proposes production plan and financing request] --> B{Input Capital analyzes proposal and negotiates terms}
B -->|Approve| C{Capital Stream Contract signed}
B -->|Reject| A
C --> D{Input Capital provides financing}
D --> E{Sustainable Farms Inc. implements production plan}
E --> F{Input Capital monitors production (optional)}
E --> G{Sustainable Farms Inc. delivers canola}
G --> H{Input Capital sells canola}
H --> I{Final price determined}
I --> J{Input Capital pays Sustainable Farms Inc.}
J --> K{Contract fulfilled}
K --> |Sustainable Farms Inc.| L{Reinvest in farm}
K --> |Input Capital| M{Continue business}
          echo Add other actions to build,
          echo test, and deploy your project.
