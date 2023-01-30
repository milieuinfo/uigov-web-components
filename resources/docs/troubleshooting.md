# Troubleshooting

## Storybook not starting
- check if there's not still a process running at the port defined, usually `8080`
- remove `--quiet` to see logs
- try changing port in `apps/storybook/project.json` to another port, e.g. `8081`
e.g. `"command": "start-storybook -p 8081 -c apps/storybook/.storybook"`
