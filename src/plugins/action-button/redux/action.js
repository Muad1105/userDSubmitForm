import { ActionButtonEvents } from './events';

export const triggerActionButton = () => ({
    type: ActionButtonEvents.TRIGGER_ACTION_BUTTON
});

export const clearTriggerActionButton = () => ({
    type: ActionButtonEvents.CLEAR_TRIGGER_ACTION_BUTTON
});