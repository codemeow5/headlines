import React from 'react';

import WeatherSettings from './components/WeatherSettings/WeatherSettings';
import ArticleSettings from './components/ArticleSettings/ArticleSettings';
import ClockSettings from './components/ClockSettings/ClockSettings';

export default class Settings extends React.Component {
    render() {
        return (
            <div>
                <WeatherSettings
                    sourcesPanel={this.props.sourcesPanel} 
                    
                    weatherUnit={this.props.weatherUnit}
                    toggleWeatherUnit={this.props.toggleWeatherUnit}

                    toggleShowWeather={this.props.toggleShowWeather}
                    showWeather={this.props.showWeather}
                    
                    allowGeolocation={this.props.allowGeolocation}
                />

                <ClockSettings 
                    toggleHourFormat={this.props.toggleHourFormat}
                    toggleShowClock={this.props.toggleShowClock}
                    hourFormat={this.props.hourFormat}
                    showClock={this.props.showClock} 
                />

                <ArticleSettings
                    showArticles={this.props.showArticles}
                    toggleShowArticles={this.props.toggleShowArticles}

                    articleLink={this.props.articleLink}
                    toggleArticleLink={this.props.toggleArticleLink}
                />
            </div>
        );
    };
}