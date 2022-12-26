import pandas as pd
from collections import namedtuple


SeaSummary = namedtuple(
    "SeaSummary", ["comfort", "caution", "emergent", "min", "max", "mean", "median"]
)

beaufort_scale = {
    "force_0": 0,
    "force_1": 0.3,
    "force_2": 0.6,
    "force_3": 1.2,
    "force_4": 2,
    "force_5": 3,
    "force_6": 4,
    "force_7": 5.5,
    "force_8": 7.5,
    "force_9": 10,
    "force_10": 12.5,
    "force_11": 16,
    "force_12": 99,
}

columns = {
    "year": 4,
    "month": 3,
    "day": 3,
    "hour": 3,
    "minute": 3,
    "wind_dir": 4,
    "wind_spd": 5,
    "wind_gust": 5,
    "wv_height": 6,
    "wv_dom_pd": 6,
    "wv_av_pd": 6,
    "wv_dir": 4,
    "pres": 7,
    "air_temp": 6,
    "water_temp": 6,
    "dew_pnt": 6,
    "vis": 5,
    "tide": 5,
}


def get_buoy_data(identifier: str, year: str) -> pd.DataFrame:
    """
    Returns URL for standard meteorological data collected by NOAA.

    :param identifier: The buoy identifier.
    :param year: Four digit year for buoy data.
    :return: URL for data.
    """
    buoy_data_url = f"https://www.ndbc.noaa.gov/view_text_file.php?filename={identifier}h{year}.txt.gz&dir=data/historical/stdmet/"
    return pd.read_fwf(
        buoy_data_url, skiprows=2, index_col=False, names=columns.keys(), widths=[int(v) for v in columns.values()]
    )


def sea_summary(sea_data: pd.DataFrame) -> SeaSummary:
    """

    :param sea_data:
    :return:
    """
    comfort = (
        sea_data.wv_height[
            (beaufort_scale["force_0"] < sea_data.wv_height)
            & (sea_data.wv_height < beaufort_scale["force_4"])
        ].shape[0]
        / sea_data.shape[0]
    )
    caution = (
        sea_data.wv_height[
            (beaufort_scale["force_4"] <= sea_data.wv_height)
            & (sea_data.wv_height < beaufort_scale["force_6"])
        ].shape[0]
        / sea_data.shape[0]
    )
    emergent = (
        sea_data.wv_height[(beaufort_scale["force_6"] <= sea_data.wv_height)].shape[0]
        / sea_data.shape[0]
    )

    return SeaSummary(
        comfort=f"{comfort:.2%}",
        caution=f"{caution:.2%}",
        emergent=f"{emergent:.2%}",
        min=f"{sea_data.wv_height.min():.2f}m",
        max=f"{sea_data.wv_height.max():.2f}m",
        mean=f"{sea_data.wv_height.mean():.2f}m",
        median=f"{sea_data.wv_height.median():.2f}m",
    )


if __name__ == '__main__':
    data_2021 = get_buoy_data("42002", "2021")
    data_2020 = get_buoy_data("42002", "2020")
    data_2019 = get_buoy_data("42002", "2019")
    data_2018 = get_buoy_data("42002", "2018")

    print(f'2021 entries: {data_2021.shape[0]}')
    print(f'2020 entries: {data_2020.shape[0]}')
    print(f'2019 entries: {data_2019.shape[0]}')
    print(f'2018 entries: {data_2018.shape[0]}')

    print(f'2021 summary: {sea_summary(data_2021[data_2021.wv_height != 99])}')
    print(f'2020 summary: {sea_summary(data_2020[data_2020.wv_height != 99])}')
    print(f'2019 summary: {sea_summary(data_2019[data_2019.wv_height != 99])}')
    print(f'2018 summary: {sea_summary(data_2018[data_2018.wv_height != 99])}')

    wave_data = pd.concat([data_2021, data_2020, data_2019, data_2018])

    wave_data = wave_data[wave_data.wv_height != 99.0]

    summary = sea_summary(wave_data)
    print(summary)
