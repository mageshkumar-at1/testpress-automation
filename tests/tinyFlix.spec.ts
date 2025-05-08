import test from '@playwright/test';
import { TinyFlixPage } from '../src/pages/tinyFlix.page';

test.describe('TinyFlix Tests', () => {
    let tinyFlixPage: TinyFlixPage;

    test.beforeEach(async ({ page }) => {
        tinyFlixPage = new TinyFlixPage(page);
    });

    test('should navigate to TinyFlix and and perform several actions', async () => {
        await test.step('Navigate to TinyFlix', async () => {
            await tinyFlixPage.navigateToTinyFlix();
        });
        await test.step('Verify the video titles', async () => {
            await tinyFlixPage.verifyVideoTitles();
        });
        await test.step('Post a comment on the video', async () => {
            await tinyFlixPage.addCommentToVideo();
        });
        await test.step('Play and pause the video', async () => {
            await tinyFlixPage.playPauseVideo();
        });
        await test.step('Mute and unmute the video', async () => {
            await tinyFlixPage.muteUnmuteVideo();
        });
        await test.step('Change video speed', async () => {
            await tinyFlixPage.changeVideoSpeed();
        });
        await test.step('Toggle autoplay', async () => {
            await tinyFlixPage.toggleAutoplay();
        });
        await test.step('Toggle subtitles', async () => {
            await tinyFlixPage.toggleSubtitle();
        });
        await test.step('Change video quality to medium', async () => {
            await tinyFlixPage.changeVideoQuality();
        });
        await test.step('Add bookmark', async () => {
            await tinyFlixPage.addBookmarks();
        });
        await test.step('Add video bookmark', async () => {
            await tinyFlixPage.searchForVideos();
        });
        await test.step('Filter videos', async () => {
            await tinyFlixPage.filterVideo();
        });
        await test.step('Sort videos', async () => {
            await tinyFlixPage.sortingVideos();
        });
    });
    test('should handle negative cases', async () => {
        await test.step('Navigate to TinyFlix', async () => {
            await tinyFlixPage.navigateToTinyFlix();
        });
        await test.step('Try posting empty comment', async () => {
            await tinyFlixPage.postEmptyComment();
        });
        await test.step('Try adding duplicate bookmark', async () => {
            await tinyFlixPage.addDuplicateBookmark();
        });
        await test.step('Select invalid video quality', async () => {
            await tinyFlixPage.setInvalidVideoQuality();
        });
        await test.step('Search non-existent video', async () => {
            await tinyFlixPage.searchNonExistentVideo();
        });
    });
});