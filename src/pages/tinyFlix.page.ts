import { Page, expect, Locator } from '@playwright/test';

export class TinyFlixPage {
    page: Page;
    clickVideo: Locator;
    addComment: Locator;
    commentText: Locator;
    playButton: Locator;
    pauseButton: Locator;
    muteButton: Locator;
    unmuteButton: Locator;
    speedButton: Locator;
    autoplayCheckbox: Locator;
    subtitleCheckbox: Locator;
    highQualityDropdown: Locator;
    mediumQualityDropdown: Locator;
    addBookmark: Locator;
    addVideoBookmark: Locator;
    bookmarkAlreadyAdded: Locator;
    searchVideos: Locator;
    filterVideos: Locator;
    sortVideos: Locator;

    constructor(page: Page) {
        this.page = page;
        this.initializeLocators(page);
    }

    async initializeLocators(page: Page) {
        this.clickVideo = page.locator("//h3[text()='Advanced React']");
        this.addComment = page.getByRole('textbox', { name: 'Comment text' });
        this.commentText = page.getByRole('button', { name: 'Post comment' });
        this.playButton = page.getByRole('button', { name: 'Play' });
        this.pauseButton = page.getByRole('button', { name: 'Pause' });
        this.muteButton = page.getByRole('button', { name: 'Mute' });
        this.unmuteButton = page.getByRole('button', { name: 'Unmute' });
        this.speedButton = page.getByLabel('Playback speed');
        this.autoplayCheckbox = page.getByRole('checkbox', { name: 'Autoplay' });
        this.subtitleCheckbox = page.getByRole('checkbox', { name: 'Subtitles' })
        this.highQualityDropdown = page.locator('select').nth(3);
        this.mediumQualityDropdown = page.locator('select').nth(2);
        this.addBookmark = page.getByRole('button', { name: 'Add bookmark' });
        this.addVideoBookmark = page.getByRole('button', { name: 'Bookmark Advanced React' });
        this.bookmarkAlreadyAdded = page.getByText('Video already bookmarked');
        this.searchVideos = page.getByRole('textbox', { name: 'Search videos' });
        this.filterVideos = page.getByLabel('Filter videos');
        this.sortVideos = page.getByLabel('Sort videos');
    }

    async navigateToTinyFlix() {
        await this.page.goto('http://localhost:5173/');
        await expect(this.page).toHaveURL('http://localhost:5173/');
    }

    async verifyVideoTitles() {
        const videoTitles = ['Advanced React', 'React Basics', 'Intro to Testing'];
        for (const title of videoTitles) {
            const titleLocator = this.page.locator(`//h3[text()='${title}']`);
            await expect(titleLocator).toBeVisible(); // Assert that the title is visible
        }
    
        const videoDescriptions = [
            'Learn how to test React applications',
            'Deep dive into React advanced concepts',
            'Learn the fundamentals of React'
        ];
        for (const description of videoDescriptions) {
            const descriptionLocator = this.page.locator(`//p[text()='${description}']`);
            await expect(descriptionLocator).toBeVisible(); // Assert that the description is visible
        }
    }
    async addCommentToVideo() {
        await this.clickVideo.click();
        await this.addComment.fill('This is a test comment');
        await this.commentText.click();
    }

    async playPauseVideo() {
        await this.playButton.click();
        await this.pauseButton.click();
    }
    async muteUnmuteVideo() {
        await this.muteButton.click();
        await this.unmuteButton.click();
    }

    async changeVideoSpeed() {
        await this.speedButton.click();
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
    }
    async toggleAutoplay() {
        await this.autoplayCheckbox.click();
        await expect(this.autoplayCheckbox).toBeChecked();
        await this.autoplayCheckbox.click();
        await expect(this.autoplayCheckbox).not.toBeChecked();
    }
    async toggleSubtitle() {
        await this.subtitleCheckbox.click();
        await expect(this.subtitleCheckbox).not.toBeChecked();
        await this.subtitleCheckbox.click();
        await expect(this.subtitleCheckbox).toBeChecked();
    }
    async changeVideoQuality() {
        await this.highQualityDropdown.selectOption({ label: 'High Quality' });
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
        expect(this.mediumQualityDropdown).toBeVisible();
    }
    async addBookmarks() {
        await this.addBookmark.click();
        await this.addVideoBookmark.click();
        await this.addVideoBookmark.click();
        await expect(this.bookmarkAlreadyAdded).toBeVisible();
    }
    async searchForVideos() {
        await this.searchVideos.fill('Advanced React');
        await this.page.keyboard.press('Enter');
        await this.searchVideos.clear();
    }
    async filterVideo() {
        await this.filterVideos.click();
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    async sortingVideos(){
        await this.sortVideos.click();
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async postEmptyComment() {
        await this.clickVideo.click();
        await this.addComment.fill('');
        await this.commentText.click();
        const errorMessage = this.page.getByText('Comment cannot be empty');
        await expect.soft(errorMessage).toBeVisible();
    }

    async addDuplicateBookmark() {
        await this.addVideoBookmark.click();
        await this.addVideoBookmark.click();
        await expect.soft(this.bookmarkAlreadyAdded).toBeVisible();
    }
    
    async searchNonExistentVideo() {
        await this.searchVideos.fill('No video');
        await this.page.keyboard.press('Enter');
    }
    
    async setInvalidVideoQuality() {
        try {
        await this.highQualityDropdown.selectOption({ value: '3x' });
        } catch (error) {
            console.error('Invalid video quality option:', error);
            
        }
    }
}